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
            .file("jb2a.impact.004.dark_purple")
            .atLocation(casterToken)
            .fadeIn(500)    
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
            .atLocation(casterToken)
            .duration(3000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0x3c1361 })
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .waitUntilFinished(-2000)
        .effect()
            .file("jb2a.toll_the_dead.purple.complete")
            .atLocation(targetId)
            .scaleIn(0, 500, {ease: "easeInCubic"})
            .fadeIn(500)
            .fadeOut(300)
    .play();