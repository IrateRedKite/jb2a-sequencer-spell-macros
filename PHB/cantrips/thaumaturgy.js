const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
.effect()
        .file("jb2a.magic_signs.circle.02.transmutation.outro.red")
        .scale(0.4)
        .atLocation(casterToken)
        .duration(3500)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})    
        .fadeIn(100)
        .fadeOut(100) 
        .belowTokens()  
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.intro.red")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.transmutation.outro.red")
        .scale(0.3)
        .atLocation(casterToken)
    .play()