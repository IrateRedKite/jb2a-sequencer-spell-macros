
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
        .opacity(0.5)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.moonbeam.01.intro.rainbow")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
        .waitUntilFinished(-500)
    .effect()
        .file("jb2a.flaming_sphere.rainbow")
        .atLocation(casterToken)
        .moveTowards(targetId, {ease: "easeInCubic"})
        .moveSpeed(500)
        .fadeIn(500)
        .duration(1200)
        .fadeOut(500)
        .scale(0.6)
        .waitUntilFinished(-500)
        .rotateIn(360, 1200)
    .effect()
        .file("jb2a.impact.004.dark_purple")
        .atLocation(targetId)
    .play();
