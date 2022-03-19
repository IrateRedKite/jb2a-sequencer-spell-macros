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
            .duration(1700)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0xffa500 })
            .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .effect()
            .file("jb2a.impact.007.orange")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.impact.007.orange")
            .atLocation(targetId)
            .fadeIn(500)
        .file("jb2a.token_border.circle.spinning.orange.008")
            .atLocation(targetId)
            .fadeIn(500)
            .scaleToObject(2, 2.2)
            .duration(5000)
            .fadeOut(1000)
            .belowTokens()
            .randomRotation()  
    .play();
