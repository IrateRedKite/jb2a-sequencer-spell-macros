const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

new Sequence()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .waitUntilFinished(-1000)
    .filter("Glow", { color: 0xffffbf })

.effect()
    .file("jb2a.impact.blue.10")
    .atLocation(casterToken)
    .fadeIn(500)

.effect()
    .file("jb2a.energy_strands.overlay.pinkyellow.01")
    .delay(200)
    .fadeIn(300)
    .fadeOut(500)
    .duration(2000)
    .scale(0.4)
    .opacity(0.4)
    .atLocation(casterToken)
    .scaleIn(0, 500, { ease: "easeOutCubic" })

.play();