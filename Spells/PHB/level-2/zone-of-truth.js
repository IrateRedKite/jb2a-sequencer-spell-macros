const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
            .atLocation(casterToken)
            .duration(2000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0xa1c4fd })
           .waitUntilFinished(-500)

        .effect()
             .file("jb2a.markers.light.intro.blue")
              .duration(1500)
            .fadeIn(500)
             .fadeOut(500)
             .scale(0.7)

        .effect()
            .file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
            .attachTo(casterToken)
            .fadeIn(500)
            .filter("Glow", { color: 0xa1c4fd })
            .fadeOut(500)
            .scale(1.25)
            .opacity(0.3)
            .belowTokens()
            .persist()

    .play();