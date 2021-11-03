const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

const spellName = "Dragon's Breath (Active)";
const spellDC = casterToken.actor.data.data.attributes.spelldc;

if(args[0] === "on"){
    await targetId.actor.createOwnedItem({
		name: spellName,
		type: "spell",
        img: "icons/creatures/abilities/dragon-fire-breath-orange.webp",
		data: {
            description: {
                value: "<div class=\"rd__b  rd__b--3\"><p>You touch one willing creature and imbue it with the power to spew magical energy from its mouth, provided it has one. Choose acid, cold, fire, lightning, or poison. Until the spell ends, the creature can use an action to exhale energy of the chosen type in a 15-foot cone. Each creature in that area must make a Dexterity saving throw, taking [[/r 3d6]] damage of the chosen type on a failed save, or half as much damage on a successful one.</p><div class=\"rd__spc-inline-post\"></div></div><div class=\"rd__b  rd__b--3\"><div class=\"rd__b  rd__b--3\"><span class=\"rd__h rd__h--3\" data-title-index=\"5947\"> <span class=\"entry-title-inner help-subtle\">At Higher Levels.</span></span> <p>When you cast this spell using a spell slot of 3rd level or higher, the damage increases by [[/r 1d6]] for each slot level above 2nd.</p><div class=\"rd__spc-inline-post\"></div></div><div class=\"rd__spc-inline-post\"></div></div>",
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
					["3d6"]
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
            source:"XGE",
		},
    })

}

if(args[0] === "off") {
	let item = targetId.actor.data.items.find(i => i.name === spellName);
	if (!item)
		return;

	targetId.actor.deleteOwnedItem(item._id);
}