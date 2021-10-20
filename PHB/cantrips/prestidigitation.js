const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
new Sequence()
    .effect()
        .file("jb2a.energy_strands.complete.purple.01")
        .scale(0.4)
        .atLocation(casterId)
        .duration(4000)
        .fadeIn(500)
        .fadeOut(500)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.purple")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.loop.purple")
        .scale(0.3)
        .atLocation(casterId)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
        .duration(800)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.purple")
        .scale(0.3)
        .atLocation(casterId)
    .play()