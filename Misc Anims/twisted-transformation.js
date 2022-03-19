//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.moonbeam.01.intro.green")
            .attachTo(tokenD)
            .scale(0.5)
            .belowTokens()
            .waitUntilFinished(-500)
            .opacity(0.5)
        .effect()
            .file("jb2a.moonbeam.01.loop.green")
            .attachTo(tokenD)
            .scale(0.5)
            .persist()
            .name(`transformation-${tokenD.id}`)
            .fadeIn(300)
            .fadeOut(300)
            .belowTokens()
            .extraEndDuration(800)
            .opacity(0.5)
        .effect()
            .file("jb2a.particles.outward.greenyellow.01.02")
            .attachTo(tokenD)
            .scale(0.5)
            .persist()
            .name(`transformation-particle-${tokenD.id}`)
            .fadeIn(300)
            .fadeOut(300)
            .belowTokens()
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `transformation-${tokenD.id}`, object: tokenD });
    Sequencer.EffectManager.endEffects({ name: `transformation-particle-${tokenD.id}`, object: tokenD });

    new Sequence()
        .effect()
            .file("jb2a.moonbeam.01.outro.green")
            .scale(0.5)
            .attachTo(tokenD)
            .belowTokens()
            .opacity(0.5)
        .effect()
            .file("jb2a.liquid.splash.red")
            .attachTo(tokenD)
            .belowTokens()
            .scale(0.5)
        .play()
}

