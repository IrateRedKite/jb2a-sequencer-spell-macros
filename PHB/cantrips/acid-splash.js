const casterToken = canvas.tokens.controlled[0];
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
        .file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
        .scale(0.5)
        .atLocation(casterToken)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.4)
        .opacity(0.4)
        .filter("Glow", { color: 0xb0bf1a })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .waitUntilFinished(-500)
    .effect()
        .file("jb2a.bullet.01.green")
        .atLocation(casterToken)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0xb0bf1a })
        .waitUntilFinished(-300)
        .moveSpeed(0.2)
        .filter("Blur", { blurX: 5, blurY: 5 })
    .effect()
        .file("jb2a.extras.tmfx.outflow.circle.01")
        .atLocation(targetId)
        .fadeIn(500)
        .fadeOut(500)
        .filter("Glow", { color: 0xb0bf1a })
        .scale(0.3, 0.5)
        .duration(1500)
        .opacity(0.6)
        .randomRotation()
    .play()