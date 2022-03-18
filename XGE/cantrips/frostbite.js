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
            .file("jb2a.extras.tmfx.inpulse.circle.04.normal")
            .atLocation(targetId)
            .duration(3000)
            .fadeIn(500)
            .fadeOut(500)
            .scaleToObject(3)
            .filter("Glow", { color: 0xd9f1ff })    
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
            .atLocation(casterToken)
            .duration(3000)
            .fadeIn(500)
            .fadeOut(500)
            .scaleToObject(2)
            .filter("Glow", { color: 0xd9f1ff })
        .effect()
            .file("jb2a.shield_themed.above.ice.01.blue")
            .atLocation(casterToken)
            .fadeIn(500)
            .duration(3000)
            .fadeOut(500)
            .scaleToObject(1.5)
            .opacity(0.8)
        .effect()
            .file("jb2a.shield_themed.below.ice.01.blue")
            .atLocation(casterToken)
            .fadeIn(500)
            .duration(3000)
            .fadeOut(500)
            .scaleToObject(1.5)
            .opacity(0.8)
            .waitUntilFinished(-500)
        .effect()
            .file("jb2a.ice_spikes.radial.burst.white")
            .atLocation(targetId)
            .duration(1500)
            .fadeOut(500)
            .scaleToObject(1.5)

    .play();
