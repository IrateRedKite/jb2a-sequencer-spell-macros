const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

    new Sequence()
        .effect()
            .file("jb2a.impact.004.blue")
            .atLocation(casterToken)
            .fadeIn(500)
        .effect()
            .file("jb2a.healing_generic.400px.green")
            .fadeIn(100)
            .fadeOut(100)
            .scale(0.4, 0.45)
            .atLocation(casterToken)
            .randomRotation()
    .play();
