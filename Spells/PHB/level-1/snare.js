const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

await warpgate.spawn("Snare", {}, {
    pre: async (location) => {
        const seq = new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
        .filter("Glow", { color: 0xffffff })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .effect()
    .file("jb2a.moonbeam.01.intro.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
        .waitUntilFinished(-500)
    .effect()
        .file("jb2a.toll_the_dead.purple.shockwave")
        .atLocation(location)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})

    seq.play();

        // Sleep for 500ms
        await (new Promise(resolve => setTimeout(resolve, 1200)));
    }
}, {
    collision: false
});


