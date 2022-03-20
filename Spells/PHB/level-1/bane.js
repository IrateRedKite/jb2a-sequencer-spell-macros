//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
    // If the dynamic active effect started

    new Sequence() 
        .effect()
            .file("jb2a.impact.004.dark_red")
            .atLocation(targetID)
            .fadeIn(500)
            .delay(2000)
        .effect()
            .delay(2000)
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