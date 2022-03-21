//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.magic_signs.circle.02.abjuration.intro.yellow")
            .attachTo(tokenD)
            .scaleToObject(1.5)
            .waitUntilFinished(-500)
            .belowTokens()
        .effect()
            .file("jb2a.magic_signs.circle.02.abjuration.loop.yellow")
            .attachTo(tokenD)
            .scaleToObject(1.5)
            .persist()
            .name(`protection-from-good-and-evil-${tokenD.id}`)
            .fadeIn(300)
            .fadeOut(300)
            .extraEndDuration(800)
            .belowTokens()
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `protection-from-good-and-evil-${tokenD.id}`, object: tokenD });

    new Sequence()
        .effect()
            .file("jb2a.magic_signs.circle.02.abjuration.outro.yellow")
            .scaleToObject(1.5)
            .attachTo(tokenD)
            .belowTokens()
        .play()
}