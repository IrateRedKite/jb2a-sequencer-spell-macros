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
            .file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0x014421 })
        .effect()
            .file("jb2a.moonbeam.01.intro.green")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
            .belowTokens()
            .scaleToObject(1.5)
            .animateProperty("spriteContainer", "rotation", { from: 0, to: 360, duration: 5000, delay: 0 })
        .effect()
            .file("jb2a.shatter.green")
            .delay(200)
            .fadeIn(100)
            .fadeOut(500)
            .duration(1200)
            .scale(0.4)
            .opacity(0.4)
            .atLocation(targetId)
    .play();