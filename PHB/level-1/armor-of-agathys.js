const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.ice_spikes.radial.burst.white")
        .scale(0.4)
        .atLocation(casterToken)
        .fadeIn(500)
        .fadeOut(500)
        .duration(1500) 
        .belowTokens()
    .effect()
        .file("jb2a.explosion.bluewhite.1")
        .scale(0.4)
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(100)     
    .play();