//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
    // If the dynamic active effect started

    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0xf02d2b })    
        .effect()
            .file("jb2a.impact.004.dark_red")
            .atLocation(targetID)
            .fadeIn(500)
        .effect()
            .file("jb2a.energy_strands.overlay.dark_red.01")
            .fadeIn(100)
            .fadeOut(500)
            .scale(0.4, 0.45)
            .attachTo(targetID)
            .randomRotation()
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .persist()
            .name(`bane-${targetID.id}`)
    .play();

}
    if(args[0] === "off"){
        // If the dynamic active effect ended
        Sequencer.EffectManager.endEffects({ name: `bane-${targetID.id}`, object: targetID });
    }    