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
            .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
            .atLocation(casterToken)
            .duration(2000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-1500)
            .filter("Glow", { color: 0xffad33 })
        .effect()
            .file("jb2a.impact.004.orange")
            .atLocation(casterToken)
            .fadeIn(100)
        .effect()
            .file("jb2a.flames.orange.01")
            .fadeIn(100)
            .duration(4000)
            .fadeOut(1000)
            .scaleToObject(3)
            .atLocation(targetId)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .scaleOut(0, 4000, {ease: "easeOutCubic"})
        .effect()
            .file("jb2a.impact.011.orange")
            .atLocation(targetId)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(2)
        .effect()
            .file("jb2a.smoke.puff.centered.dark_black.0")
            .atLocation(targetId)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(3)
            .randomRotation()
    .play();


  