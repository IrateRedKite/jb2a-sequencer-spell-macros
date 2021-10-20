const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.conjuration.intro.green")
        .scale(0.3)
        .atLocation(casterId)
    .effect()
        .file("jb2a.bullet.01.green")
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0xb0bf1a })
        .waitUntilFinished()
    .effect()
        .file("jb2a.extras.tmfx.outflow.circle.01")
        .atLocation(targetId)
        .fadeIn(500)
        .fadeOut(500)
        .filter("Glow", { color: 0xb0bf1a })
        .scale(0.3, 0.5)
        .duration(1500)
        .randomRotation()
    .play()