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
        .file("jb2a.magic_signs.rune.necromancy.intro.purple")
        .scale(0.3)
        .atLocation(casterId)
    .effect()
        .file("jb2a.energy_strands.range.standard.purple")
        .gridSize(1)
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0xffffff})
        .waitUntilFinished(-1200)
    .effect()
        .file("jb2a.arcane_hand.purple")
        .atLocation(targetId)
        .fadeIn(500)
        .fadeOut(500)
        .filter("Glow", { color: 0xffffff })
        .scale(0.3)
        .duration(1000)
    .play()