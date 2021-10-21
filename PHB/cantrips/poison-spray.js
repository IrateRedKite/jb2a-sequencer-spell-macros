const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.conjuration.intro.green")
        .scale(0.3)
        .atLocation(casterToken)
    .effect()
        .file("jb2a.arrow.poison.green.02")
        .fadeIn(1000)
        .atLocation(casterToken)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0xb0bf1a })
        .filter("Blur", { blurX: 20, blurY: 20 })
    .play()