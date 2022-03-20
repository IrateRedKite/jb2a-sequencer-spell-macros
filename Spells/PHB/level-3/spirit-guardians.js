const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.inpulse.conjuration")
            .atLocation(casterToken)
            .duration(2000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0xc00000 })
           .waitUntilFinished(-500)
        .effect()
             .file("jb2a.markers.02.red")
              .duration(1500)
            .fadeIn(500)
             .fadeOut(500)
             .scale(0.7)
        .effect()
            .file("jb2a.spirit_guardians.dark_red.ring")
            .attachTo(casterToken)
            .fadeIn(500)
            .fadeOut(500)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .persist()

    .play();