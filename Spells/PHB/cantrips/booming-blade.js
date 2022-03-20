// This needs to be placed in dae's macro.execute with the @token and @target parameters in order to work correctly.

const casterToken = canvas.scene.tokens.get(args[1]);
const targetActor = canvas.scene.tokens.get(args[2]);

if (args[0] === "on") {
    // If the dynamic active effect started

    new Sequence()
        .effect()
        .file("jb2a.static_electricity.02.blue")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(4000)
        .fadeIn(100)
        .fadeOut(100)
        .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-1200)
        .filter("Glow", { color: 0xadd8e6 })
        .opacity(0.8)
        .effect()
        .file("jb2a.rapier.melee.01.blue.1")
        .atLocation(casterToken)
        .stretchTo(targetActor)
        //.missed(args[0].hitTargets.length === 0)
        .waitUntilFinished(-1000)
        .fadeIn(500)
        .fadeOut(1500)
        .effect()
        .file("jb2a.static_electricity.01.blue")
        .scale(0.4)
        .attachTo(targetActor)
        .fadeIn(500)
        .fadeOut(1000)
        .name(`booming-blade-${targetActor.id}`)
        .persist()
        .play()

}
if (args[0] === "off") {
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `booming-blade-${targetActor.id}`, object: targetActor.id });
}