await Sequencer.Preloader.preloadForClients(
    ["jb2a.energy_strands.complete.dark_red.01",
        "jb2a.eldritch_blast.dark_red",
        "jb2a.static_electricity.02.red"
    ], false)


const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];

new Sequence()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0xff0000 })
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.energy_strands.complete.dark_red.01")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)

.effect()
    .file("jb2a.eldritch_blast.dark_red")
    .atLocation(casterToken)
    .stretchTo(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI

.effect()
    .file("jb2a.static_electricity.02.red")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .delay(1000)
    .scaleToObject()
    .playIf(args[0].hitTargets.length === 1)


.play();