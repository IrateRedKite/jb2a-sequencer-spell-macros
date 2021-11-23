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
            .file("jb2a.butterflies.many.red")
            .atLocation(casterToken)
            .fadeIn(500) 
            .fadeOut(500)
            .duration(4000)  
            .scale(0.8) 
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0xc00000 })
        .effect()
            .file("jb2a.impact.003.dark_red")
            .atLocation(targetId)
            .fadeIn(100)
        .effect()
            .file("jb2a.claws.200px.dark_red")
            .atLocation(targetId)
            .fadeIn(500)
            .scaleToObject(1.5)
            .duration(2000)
            .fadeOut(500)
    .play();