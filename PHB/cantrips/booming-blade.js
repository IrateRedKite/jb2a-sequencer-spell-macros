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
        .file("jb2a.static_electricity.02.blue")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(4000)
        .fadeIn(100)
        .fadeOut(100)
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(args[0].tokenId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-1200)
        .filter("Glow", { color: 0xadd8e6 })
        .opacity(0.8)
    .effect()
        .file("jb2a.rapier.melee.01.blue.1")
        .atLocation(casterToken)
        .reachTowards(targetId)
        .missed(args[0].hitTargets.length === 0)
        .waitUntilFinished(-1000)
        .fadeIn(500)
        .fadeOut(1500)
    .effect()
        .file("jb2a.static_electricity.01.blue")
        .scale(0.4)
        .atLocation(targetId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(1000)
    .play()