const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
.effect()
        .file("jb2a.butterflies.many.purple")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(3500)
        .fadeIn(100)
        .fadeOut(100)   
.effect()
        .file("jb2a.magic_signs.rune.necromancy.intro.purple")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.necromancy.outro.purple")
        .scale(0.3)
        .atLocation(casterToken)
    .play()