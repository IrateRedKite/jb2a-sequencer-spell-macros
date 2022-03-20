//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
    // If the dynamic active effect started
        new Sequence() 
        .effect()
            .file("jb2a.impact.007.blue")
            .atLocation(targetID)
            .fadeIn(500)
            .delay(2000)
        .effect()
            .delay(2000)
            .file("jb2a.markers.light.loop.blue")
            .fadeIn(100)
            .fadeOut(500)
            .scale(0.4, 0.45)
            .attachTo(targetID)
            .randomRotation()
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .persist()
            .name(`faerie-fire-${targetID.id}`)
    .play();

    targetID.document.update({ light:{ bright : 0, dim: 10, color : '#a5d5f3', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}})

}
    if(args[0] === "off"){
        // If the dynamic active effect ended
        Sequencer.EffectManager.endEffects({ name: `faerie-fire-${targetID.id}`, object: targetID });
        targetID.document.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}})

    }    