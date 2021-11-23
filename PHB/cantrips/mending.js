const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.inpulse.transmutation")
        .atLocation(casterToken)
        .duration(1700)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xffa500 })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.moonbeam.01.intro.rainbow")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
        .belowTokens()
    .effect()
        .file("jb2a.extras.tmfx.outpulse.circle.02.normal")
        .atLocation(casterToken)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xffa500 })
        .opacity(0.5)
    .play();