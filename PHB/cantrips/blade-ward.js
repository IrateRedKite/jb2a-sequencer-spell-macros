const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.intro.blue")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.loop.blue")
        .scale(0.3)
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.outro.blue")
        .scale(0.3)
        .atLocation(casterToken)
    .play();
