await Sequencer.Preloader.preloadForClients(
    "jb2a.markers.02.pink",
    "jb2a.impact.purple.1",
    "jb2a.impact.011.dark_purple",
    "jb2a.energy_strands.complete.dark_red.01")

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

new Sequence()

.effect()
    .file("jb2a.markers.02.pink")
    .atLocation(casterToken)
    .duration(3000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.75)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.impact.purple.1")
    .atLocation(casterToken)
    .fadeIn(100)
    .fadeOut(200)
    .waitUntilFinished(-500)
    .scale(0.75)

.effect()
    .file("jb2a.impact.011.dark_purple")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.75)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.energy_strands.complete.dark_red.01")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject(2)
    .persist()

.play();