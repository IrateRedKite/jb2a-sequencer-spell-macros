const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-1000)
            .filter("Glow", { color: 0xadd8e6 })
        .effect()
            .file("jb2a.impact.004.dark_purple")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
        .effect()
            .file("jb2a.markers.light.loop.blue")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
            .belowTokens()
            .scaleToObject(1.5)
            .animateProperty("spriteContainer", "rotation", { from: 0, to: 360, duration: 5000, delay: 0 })
    .play();