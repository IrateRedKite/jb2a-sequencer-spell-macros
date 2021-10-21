const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.4)
        .filter("Glow", { color: 0xadd8e6 })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.extras.tmfx.border.circle.simple.02")
        .scale(0.3)
        .atLocation(casterToken)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .filter("Glow", { color: 0xadd8e6 })
        .fadeOut(500)
        .duration(2000)
        .opacity(0.7)
    .play();
