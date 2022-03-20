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
            .file("jb2a.extras.tmfx.runes.circle.simple.necromancy")
            .atLocation(casterToken)
            .fadeIn(500)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(4)
            .duration(1000)
            .fadeOut(500)
        .effect()
            .file("jb2a.cure_wounds.400px.red")
            .atLocation(casterToken)
            .fadeIn(500)
            .fadeOut(500)
            .scaleToObject(3)
            .duration(1500)
            .waitUntilFinished(-800)
        .effect()
            .file("jb2a.impact.003.dark_red")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.impact.004.dark_red")
            .atLocation(targetId)
            .fadeIn(500)
        .file("jb2a.portals.horizontal.ring.dark_red")
            .atLocation(targetId)
            .fadeIn(500)
            .scaleIn(0, 300, {ease: "easeOutCubic"})
            .scaleToObject(2, 2.2)
            .duration(2500)
            .fadeOut(500)
            .belowTokens()
            .randomRotation()  
    .play();
