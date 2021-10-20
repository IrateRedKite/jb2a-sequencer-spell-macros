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
        .file("jb2a.magic_signs.rune.divination.intro.blue")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
 .effect()
        .file("jb2a.extras.tmfx.inpulse.circle.04.normal")
        .scale(0.3)
        .atLocation(targetId)
        .fadeIn(100)
        .fadeOut(100)
    .effect()
        .file("jb2a.magic_signs.rune.divination.loop.blue")
        .scale(0.3)
        .atLocation(casterId)
        .fadeIn(100)
        .fadeOut(100)
        .duration(500)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.divination.outro.blue")
        .scale(0.3)
        .atLocation(casterId)
    .play()