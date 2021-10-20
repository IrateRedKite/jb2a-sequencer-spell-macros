const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
new Sequence()
.effect()
        .file("jb2a.magic_signs.circle.02.transmutation.outro.red")
        .scale(0.4)
        .atLocation(casterId)
        .duration(3500)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})    
        .fadeIn(100)
        .fadeOut(100) 
        .belowTokens()  
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.red")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.red")
        .scale(0.3)
        .atLocation(casterId)
    .play()