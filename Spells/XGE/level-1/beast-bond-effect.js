// This needs to be placed in dae's macro.execute with the @token and @target parameters in order to work correctly.

const casterToken = canvas.scene.tokens.get(args[1]);
const targetActor = canvas.scene.tokens.get(args[2]);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
        .effect()
            .file("jb2a.markers.runes.green02.02")
            .attachTo(casterToken)
            .scale(0.5)
            .persist()
            .name(`beast-bond-${casterToken.id}`)
            .fadeIn(1000)
            .fadeOut(1000)
        .effect()
            .file("jb2a.markers.runes.green02.02")
            .attachTo(targetActor)
            .scale(0.5)
            .persist()
            .name(`beast-bond-${targetActor.id}`)
            .fadeIn(1000)
            .fadeOut(1000)
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `beast-bond-${casterToken.id}`, object: casterToken.id });
    Sequencer.EffectManager.endEffects({ name: `beast-bond-${targetActor.id}`, object: targetActor.id });
}