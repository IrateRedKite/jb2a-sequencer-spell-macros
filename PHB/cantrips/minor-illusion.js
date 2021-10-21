const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

await warpgate.spawn("Minor Illusion", {}, {
    pre: async (location) => {
        const seq = new Sequence()
        .effect()
            .file("jb2a.toll_the_dead.purple.shockwave")
            .atLocation(location)
            .fadeIn(500)
            .fadeOut(500)
            .filter("Glow", { color: 0xb7e0f8 })
            .scale(0.5)
            .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
        .effect()
            .file("jb2a.magic_signs.rune.illusion.intro.purple")
            .scale(0.3)
            .atLocation(casterToken)
            .waitUntilFinished(-550)
        .effect()
            .file("jb2a.magic_signs.rune.illusion.loop.purple")
            .scale(0.3)
            .atLocation(casterToken)
            .fadeIn(100)
            .fadeOut(100)
            .waitUntilFinished(-550)
            .duration(500)
        .effect()
            .file("jb2a.magic_signs.rune.illusion.outro.purple")
            .scale(0.3)
            .atLocation(casterToken)  
        seq.play();

        // Sleep for 500ms
        await (new Promise(resolve => setTimeout(resolve, 500)));
    }
}, {
    collision: false
});