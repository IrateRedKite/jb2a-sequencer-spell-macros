await Sequencer.Preloader.preloadForClients([
    "jb2a.energy_strands.complete.dark_red.01",
    "jb2a.darkness.black",
    "jb2a.fire_ring.500px.red"
], false)

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

new Sequence()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.necromancy")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .opacity(0.5)
    .filter("Glow", { color: 0xffffff })
    .scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
    .waitUntilFinished(-500)

.effect()
    .fadeIn(500)
    .file("jb2a.energy_strands.complete.dark_red.01")
    .persist()
    .scale(0.4)
    .attachTo(casterToken)
    .name(`ShadowOfMoil_${casterToken.data._id}`)
    .wait(1000)

.effect()
    .fadeIn(500)
    .file("jb2a.darkness.black")
    .belowTokens()
    .opacity(0.3)
    .size(canvas.grid.size * 5)
    .persist()
    .attachTo(casterToken)
    .name(`ShadowOfMoilDarkness_${casterToken.data._id}`)

.effect()
    .file("jb2a.fire_ring.500px.red")
    .atLocation(casterToken)
    .fadeIn(100)
    .scaleToObject(1.25)
    .name(`FireRing_ShadowOfMoil_${casterToken.data._id}`)
    .persist()

.play();