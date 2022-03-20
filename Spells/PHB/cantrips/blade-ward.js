const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
        .atLocation(casterToken)
        .duration(1700)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xD7E5F0 })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.shimmer.01.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(500)
        .duration(1900)
        .scaleToObject(1.5)
    .effect()
        .file("jb2a.impact.010.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
    .play();