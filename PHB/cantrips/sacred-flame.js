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
        .file("jb2a.magic_signs.rune.evocation.intro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.divine_smite.caster.blueyellow")
        .atLocation(targetId)
        .scale(0.5)
        .belowTokens()
        .fadeOut(1000)
        .duration(1500)
    .effect()
        .file("jb2a.explosion.blue.2")
        .atLocation(targetId)
        .scale(0.5)
    .effect()
        .file("jb2a.magic_signs.rune.evocation.outro.yellow")
        .scale(0.3)
        .atLocation(casterToken)
    .play()