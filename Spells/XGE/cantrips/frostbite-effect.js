//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.token_border.circle.static.blue.001")
            .delay(2000)
            .attachTo(tokenD)
            .scale(0.5)
            .fadeIn(2000)
            .fadeOut(2000)
            .persist()
            .name(`frostbite-${tokenD.id}`)
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `frostbite-${tokenD.id}`, object: tokenD });
}