let tokenD = canvas.tokens.get(args[0].tokenId);
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
            .atLocation(tokenD)
            .waitUntilFinished(-550)
        .effect()
            .file("jb2a.magic_signs.rune.illusion.loop.purple")
            .scale(0.3)
            .atLocation(tokenD)
            .fadeIn(100)
            .fadeOut(100)
            .waitUntilFinished(-550)
            .duration(500)
        .effect()
            .file("jb2a.magic_signs.rune.illusion.outro.purple")
            .scale(0.3)
            .atLocation(tokenD)  
        seq.play();

        // Sleep for 500ms
        await (new Promise(resolve => setTimeout(resolve, 500)));
    }
}, {
    collision: false
});