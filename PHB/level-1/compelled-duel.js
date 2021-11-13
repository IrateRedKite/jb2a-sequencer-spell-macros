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
            .file("jb2a.extras.tmfx.outpulse.circle.02.normal")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0xadadad })
            .belowTokens()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
            .atLocation(casterToken)
            .duration(3700)
            .fadeIn(500)
            .fadeOut(500)
            .scaleToObject(2)
            .waitUntilFinished(-3500)
            .filter("Glow", { color: 0xadadad })
        .effect()
            .file("jb2a.impact.003.blue")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.extras.tmfx.inpulse.circle.02.normal")
            .atLocation(targetId)
            .duration(3500)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0xadadad })
            .belowTokens()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
            .atLocation(targetId)
            .fadeIn(500)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(2)
            .duration(3500)
            .fadeOut(500)
            .filter("Glow", { color: 0xadadad })
            .scaleIn(0, 300, {ease: "easeOutCubic"})
    .play();