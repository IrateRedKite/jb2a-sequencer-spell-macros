const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

    new Sequence()
        .effect()
            .file("jb2a.energy_strands.overlay.purple.01")
            .delay(200)
            .fadeIn(300)
            .fadeOut(500)
            .duration(3000)
            .scale(0.4)
            .atLocation(casterToken)
            .scaleIn(0, 500, {ease: "easeOutCubic"})    
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.necromancy")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0x800080 })    
        .effect()
            .file("jb2a.moonbeam.01.intro.blue")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
            .duration(1200)
            .belowTokens()
            .waitUntilFinished(-500)        
        .effect()
            .delay(500)
            .file("jb2a.impact.007.purple")
            .atLocation(targetId)
            .fadeIn(100)
            .fadeOut(200)
        .effect()
            .file("jb2a.arcane_hand.purple")
            .scale(0.3)
            .atLocation(targetId)
            .fadeIn(500)
            .fadeOut(500)
            .duration(1500) 
            .opacity(0.5)
    .play();