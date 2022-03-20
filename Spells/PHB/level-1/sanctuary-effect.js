//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.energy_field.02.below.blue")
            .attachTo(tokenD)
            .scale(0.5)
            .persist()
            .name(`sanctuary-${tokenD.id}`)
            .fadeIn(300)
            .fadeOut(3000)
            .opacity(0.7)
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `sanctuary-${tokenD.id}`, object: tokenD });
}