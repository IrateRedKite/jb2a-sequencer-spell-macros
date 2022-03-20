
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
            .file("jb2a.markers.light.intro.green")
            .atLocation(casterToken)
            .fadeIn(500)
            .fadeOut(500)    
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0x243FD6 })
            .opacity(0.5)
        .effect()
            .file("jb2a.hunters_mark.loop.02.blue")
            .scaleIn(0, 500, {ease: "easeOutCubic"})
            .fadeOut(500)
            .scaleToObject(1)
            .attachTo(targetId)
            .opacity(0.5)
    .play();