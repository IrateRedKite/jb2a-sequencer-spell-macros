//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.
let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
    // If the dynamic active effect started

    new Sequence()
         .effect()
            .file("jb2a.extras.tmfx.outpulse.circle.01.slow")
            .atLocation(targetID)
            .fadeIn(500)
            .fadeOut(500)
            .filter("Glow", { color: 0xfefebe })
        .effect()
            .file("jb2a.bless.200px.intro.yellow")
            .atLocation(targetID)
            .fadeIn(100)
            .belowTokens()
            .scaleToObject(2)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .waitUntilFinished(-500)
        .effect()
            .file("jb2a.bless.200px.loop.yellow")
            .fadeOut(500)
            .scaleToObject(2)
            .attachTo(targetID)
            .persist()
            .belowTokens()
            .name(`bless-${targetID.id}`)
    .play();

}
    if(args[0] === "off"){
        // If the dynamic active effect ended
        Sequencer.EffectManager.endEffects({ name: `bless-${targetID.id}`, object: targetID });
    }    