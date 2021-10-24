const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

let tokenD = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
     // If the dynamic active effect started
    new Sequence()
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
            .file("jb2a.moonbeam.01.intro.rainbow")
            .atLocation(casterToken)
            .fadeIn(100)
            .fadeOut(200)
            .duration(1200)
            .waitUntilFinished(-500)
        .effect()
            .file("jb2a.shield.02.intro.yellow")
            .attachTo(tokenD)
            .scale(0.5)
            .waitUntilFinished(-500)
            .opacity(0.7)
        .effect()
            .file("jb2a.shield.02.loop.yellow")
            .attachTo(tokenD)
            .scale(0.5)
            .persist()
            .name(`shield-of-faith-${tokenD.id}`)
            .fadeIn(300)
            .fadeOut(300)
            .extraEndDuration(800)
            .opacity(0.7)
        .play()
}

if(args[0] === "off"){
    // If the dynamic active effect ended
    Sequencer.EffectManager.endEffects({ name: `shield-of-faith-${tokenD.id}`, object: tokenD });

    new Sequence()
        .effect()
            .file("jb2a.shield.02.outro_explode.yellow")
            .scale(0.5)
            .attachTo(tokenD)
            .opacity(0.7)
        .play()
}