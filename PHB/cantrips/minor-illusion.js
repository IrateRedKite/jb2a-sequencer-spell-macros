const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

await warpgate.spawn("Minor Illusion", {}, {
    pre: async (location) => {
        const seq = new Sequence()
        .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.illusion")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
        .filter("Glow", { color: 0xffffbf })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.moonbeam.01.intro.rainbow")
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

    seq.play();

        // Sleep for 500ms
        await (new Promise(resolve => setTimeout(resolve, 1200)));
    }
}, {
    collision: false
});