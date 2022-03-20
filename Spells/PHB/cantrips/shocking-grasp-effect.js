//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.static_electricity.02.blue")
            .delay(2000)
            .attachTo(tokenD)
            .scaleToObject(1.2)
            .fadeIn(500)
            .fadeOut(2000)
            .persist()
            .name(`shocking-grasp-${tokenD.id}`)
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `shocking-grasp-${tokenD.id}`, object: tokenD });
}