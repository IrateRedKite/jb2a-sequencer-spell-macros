const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.impact.006.yellow")
        .scale(1)
        .atLocation(casterToken)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.loop.yellow")
        .scale(0.3)
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
        .duration(500)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
    .play()