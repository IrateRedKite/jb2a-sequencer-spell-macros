const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
   .effect()
        .file("jb2a.extras.tmfx.border.circle.outpulse.02.fast")
        .scale(0.5)
        .atLocation(casterToken)
        .filter("Glow", { color: 0xf65ffc })
        .fadeIn(500)
        .fadeOut(500)
        .duration(2500)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})      
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.intro.pink")
        .scale(0.3)
        .atLocation(casterToken)
        .waitUntilFinished(-550)      
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.loop.pink")
        .scale(0.3)
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(100)
        .duration(500)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.outro.pink")
        .scale(0.3)
        .atLocation(casterToken)
    .play()