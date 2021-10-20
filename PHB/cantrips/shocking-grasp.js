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
        .file("jb2a.magic_signs.rune.evocation.intro.blue")
        .scale(0.3)
        .atLocation(casterId)
    .effect()
        .file("jb2a.unarmed_strike.magical.01.blue")
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .waitUntilFinished(-800)
    .effect()
        .file("jb2a.lightning_ball.blue")
        .atLocation(targetId)
        .fadeIn(500)
        .fadeOut(500)
        .duration(1500)
        .scale(0.5)
    .play()