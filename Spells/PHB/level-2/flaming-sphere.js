const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

await warpgate.spawn("Flaming Sphere", {}, {
    pre: async (location) => {
        const seq = new Sequence()
        .effect()
            .file("jb2a.energy_strands.complete.orange.01")
            .scale(0.4)
            .atLocation(casterToken)
            .fadeIn(500)
            .duration(1500)
            .fadeOut(500)
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.inpulse.conjuration")
            .scale(0.4)
            .atLocation(casterToken)
            .waitUntilFinished(-1000)
            .fadeIn(500)
            .duration(1500)
            .fadeOut(500)
            .filter("Glow", { color: 0xecbe51 })
        .effect()
            .file("jb2a.explosion.02.orange")
            .atLocation(location)
            .fadeIn(100)
            .fadeOut(100)
            .scale(0.8)
            .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        seq.play();

        // Sleep for 300ms
        await (new Promise(resolve => setTimeout(resolve, 800)));
    }
}, {
    collision: false
});