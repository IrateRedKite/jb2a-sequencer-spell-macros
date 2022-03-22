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
            .file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
            .atLocation(casterToken)
            .fadeIn(500)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(4)
            .duration(1000)
            .fadeOut(500)
            .filter("Glow", { color: 0xFFFFA7 })
        .effect()
            .file("jb2a.cure_wounds.200px.blue")
            .atLocation(casterToken)
            .fadeIn(500)
            .fadeOut(500)
            .scaleToObject(3)
            .duration(1500)
            .waitUntilFinished(-800)
        .effect()
            .file("jb2a.extras.tmfx.outpulse.circle.01.slow")
            .atLocation(targetId)
            .filter("Glow", { color: 0xFFFFA7 })
            .fadeIn(100)
            .fadeOut(500)
            .scaleToObject(5)
            .belowTokens()
        .effect()
            .file("jb2a.impact.004.yellow")
            .atLocation(targetId)

    .play();
