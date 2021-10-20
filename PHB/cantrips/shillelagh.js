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
        .file("jb2a.butterflies.many.green")
        .scale(0.4)
        .atLocation(casterId)
        .duration(4000)
        .fadeIn(100)
        .fadeOut(100)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.green")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.loop.green")
        .scale(0.3)
        .atLocation(casterId)
        .fadeIn(100)
        .fadeOut(100)
        .waitUntilFinished(-550)
        .duration(800)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.green")
        .scale(0.3)
        .atLocation(casterId)
    .effect()
        .file("jb2a.greatclub.green")
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .waitUntilFinished(-1200)
    .play()
