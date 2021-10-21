const casterToken = canvas.tokens.controlled[0];
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
        .file("jb2a.magic_signs.rune.abjuration.intro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.shield.01.intro.purple")
        .atLocation(targetId)
        .scale(0.5)
        .opacity(0.5)
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.outro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
    .play()