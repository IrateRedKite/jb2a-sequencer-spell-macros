// This needs to be placed in dae's macro.execute with the @spellLevel, @target and @token parameters in order to work correctly.
//Get the caster and target token IDs
const casterToken = canvas.scene.tokens.get(args[3]);
const targetActor = canvas.scene.tokens.get(args[2]);

// Set the name and DC of the cantrip to be created on the target
const spellName = "Dragon's Breath (Active)";
const spellDC = casterToken.actor.data.data.attributes.spelldc;

// When the effect is toggled on:
if (args[0] === "on") {
	// Create the damage type selection dialogue
	let d = new Dialog({
		title: "Dragon's Breath",
		content: `
		<p>Please choose a damage type from the drop-down menu:</p>
		<form>
			<div>
				<select id="formDamageType">
					<option value="acid" selected="selected">Acid</option>
					<option value="cold">Cold</option>
					<option value="fire">Fire</option>
					<option value="lightning">Lightning</option>
					<option value="poison">Poison</option>
				</select>
			</div>
		</form>
		`,
		buttons: {
			one: {
				icon: '<i class="fas fa-check"></i>',
				label: "Cast",
				callback: () => triggerEffect($("#formDamageType").val()),
			},
			two: {
				icon: '<i class="fas fa-times"></i>',
				label: "Cancel",
			}
		},
		default: "Cast",
	});
	d.render(true);
	const triggerEffect = async (damageType) => {
		// Grabs spellLevel from args passed in at macro.execute
		const spellLevel = args[args.length - 1].efData.flags.dae.itemData.data.level;
		// Ensure that if the macro args were not passed in, the spell level is cast at the default
		const upcastLevel = typeof args[1] === "number" ? args[1] : spellLevel;
		// Calculates the number of dice to add
		const dice = upcastLevel - spellLevel + 3;
		// Create the cantrip on the target actor's sheet
		const item = await targetActor.actor.createEmbeddedDocuments('Item', [{
			name: spellName,
			type: "spell",
			img: "icons/creatures/abilities/dragon-fire-breath-orange.webp",
			data: {
				description: {
					value: "<div class=\"rd__b  rd__b--3\"><p>You spew magical energy from your mouth. You may use an action to exhale energy of the type chosen by the caster in a 15-foot cone. Each creature in that area must make a Dexterity saving throw against the caster's spell DC, taking [[/r 3d6]] damage of the chosen type on a failed save, or half as much damage on a successful one.</p><div class=\"rd__spc-inline-post\"></div></div><div class=\"rd__b  rd__b--3\"><div class=\"rd__b  rd__b--3\"><span class=\"rd__h rd__h--3\" data-title-index=\"5947\"> <span class=\"entry-title-inner help-subtle\">At Higher Levels.</span></span> <p>When this spell is cast using a spell slot of 3rd level or higher, the damage increases by [[/r 1d6]] for each slot level above 2nd.</p><div class=\"rd__spc-inline-post\"></div></div><div class=\"rd__spc-inline-post\"></div></div>",
				},
				activation: {
					type: "action",
					cost: 1
				},
				target: {
					value: 15,
					units: "ft",
					type: "cone"
				},
				damage: {
					parts: [
						[dice + "d6", damageType]
					]
				},
				save: {
					ability: "dex",
					dc: spellDC,
					scaling: "flat"
				},
				level: 0,
				school: "trs",
				actionType: "save",
				source: "XGE",
			},
			flags: {
				"midi-qol": {
					onUseMacroName: "dragons-breath-active-item",
				}
			}
		}]);
		// Play the casting effect on the caster and the target
		new Sequence()
			.effect()
				.file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
				.atLocation(casterToken)
				.duration(1000)
				.fadeIn(300)
				.fadeOut(500)
				.scale(0.5)
				.opacity(0.3)
				.filter("Glow", {color: 0xffa500})
				.scaleIn(0, 500, {ease: "easeOutCubic",delay: 100})
			.effect()
				.file("jb2a.impact.004.orange")
				.atLocation(casterToken)
				.belowTokens()
				.waitUntilFinished(-500)
			.effect()
				.file("jb2a.markers.light.intro.yellow")
				.attachTo(targetActor)
				.scaleToObject(1.5)
				.waitUntilFinished(-500)
				.belowTokens()
			.effect()
				.file("jb2a.markers.light.loop.yellow")
				.attachTo(targetActor)
				.scale(0.5)
				.persist()
				.name(`dragons-breath-${targetActor.id}`)
				.fadeIn(300)
				.fadeOut(300)
				.extraEndDuration(800)
				.belowTokens()
		.play()
	};
}
// When the effect is toggled off:
if (args[0] === "off") {
	let item = targetActor.actor.data.items.find(i => i.name === spellName);
	if (!item)
		return;
	// Remove the cantrip from the target's sheet when the effect ends
	console.log(item)
	targetActor.actor.deleteEmbeddedDocuments('Item', [item.id]);
	// End the sequencer effect attached to the target
	Sequencer.EffectManager.endEffects({
		name: `dragons-breath-${targetActor.id}`,
		object: targetActor.id
	});
}