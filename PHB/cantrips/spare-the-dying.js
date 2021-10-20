const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
new Sequence()
.effect()
        .file("jb2a.butterflies.many.purple")
        .scale(0.4)
        .atLocation(casterId)
        .duration(3500)
        .fadeIn(100)
        .fadeOut(100)   
.effect()
        .file("jb2a.magic_signs.rune.necromancy.intro.purple")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.necromancy.outro.purple")
        .scale(0.3)
        .atLocation(casterId)
    .play()