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
            .filter("Glow", { color: 0xfadadd })
        .effect()
            .file("jb2a.moonbeam.01.intro.rainbow")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
            .duration(1200)
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
    .play();
