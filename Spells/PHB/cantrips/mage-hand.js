const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

await warpgate.spawn("Mage Hand", {}, {
    pre: async (location) => {
        const seq = new Sequence()
        .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
        .filter("Glow", { color: 0xa1c4fd })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.moonbeam.01.intro.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
        .waitUntilFinished(-500)
    .effect()
        .file("jb2a.toll_the_dead.blue.shockwave")
        .atLocation(location)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .filter("Glow", { color: 0xa1c4fd })

    seq.play();

        // Sleep for 500ms
        await (new Promise(resolve => setTimeout(resolve, 1200)));
    }
}, {
    collision: false
});