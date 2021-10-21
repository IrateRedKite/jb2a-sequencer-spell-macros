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
        .file("jb2a.butterflies.many.green")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(4000)
        .fadeIn(500)
        .fadeOut(500)    
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.intro.green")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.outro.green")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-1000)
    .effect()
        .file("jb2a.butterflies.many.green")
        .scale(0.4)
        .atLocation(targetId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
    .effect()
        .file("jb2a.extras.tmfx.border.circle.outpulse.01.fast")
        .scale(0.4)
        .atLocation(targetId)
        .fadeIn(100)
        .fadeOut(100)     
        .filter("Glow", { color: 0xb0bf1a })
    .play();