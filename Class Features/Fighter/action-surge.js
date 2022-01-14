const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

    new Sequence()
        .effect()
            .file("jb2a.explosion.02.yellow")
            .atLocation(casterToken)
            .fadeIn(100)
            .randomRotation()
        .effect()
            .file("jb2a.divine_smite.caster.yellowwhite")
            .fadeIn(100)
            .fadeOut(100)
            .atLocation(casterToken)
            .randomRotation()
    .play();
