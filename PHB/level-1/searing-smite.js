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
        .atLocation(args[0].tokenId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-1200)
        .filter("Glow", { color: 0xffa500 })
        .opacity(0.8)
    .effect()
        .file("jb2a.spear.melee.fire.orange")
        .atLocation(casterToken)
        .reachTowards(targetId)
        .missed(args[0].hitTargets.length === 0)
        .waitUntilFinished(-1200)
        .fadeIn(500)
        .fadeOut(1500)
    .effect()
        .from(targetId)
        .duration(2500)
        .fadeIn(500)
        .fadeOut(500)
        .atLocation(targetId)
        .filter("Glow", { color: 0xFFA500 })
        .scaleToObject()
    .effect()
        .file("jb2a.explosion.02.orange")
        .atLocation(targetId)
        .fadeIn(100)
        .fadeOut(100)
        .scale(0.5)
    .effect()
        .file("jb2a.flaming_sphere.orange")
        .scaleToObject(2)
        .belowTokens()
        .atLocation(targetId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(1000)
    .play()

