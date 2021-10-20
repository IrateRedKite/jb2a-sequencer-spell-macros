const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.yellow")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.impact.006.yellow")
        .scale(1)
        .atLocation(casterId)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.loop.yellow")
        .scale(0.3)
        .atLocation(casterId)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
        .duration(500)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.yellow")
        .scale(0.3)
        .atLocation(casterId)
    .play()