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
            .filter("Glow", { color: 0xffffbf })
        .effect()
            .file("jb2a.impact.004.yellow")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.energy_strands.overlay.pinkyellow.01")
            .delay(200)
            .fadeIn(300)
            .fadeOut(500)
            .duration(3000)
            .scale(0.4)
            .opacity(0.4)
            .atLocation(targetId)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.simple.enchantment")
            .atLocation(targetId)
            .fadeIn(500)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(2)
            .duration(2000)
            .fadeOut(500)
            .filter("Glow", { color: 0xffffbf })
    .play();