const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.butterflies.many.green")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(2500)
        .fadeIn(200)
        .fadeOut(200)    
    .effect()
        .file("jb2a.magic_signs.rune.conjuration.intro.green")
        .scale(0.3)
        .atLocation(casterToken)
    .effect()
        .file("autoanimations.range.scorchingray.01.green")
        .atLocation(casterToken)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0x8cbb3a })
        .waitUntilFinished()
    .play()