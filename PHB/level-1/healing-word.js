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

let myStringArray = Array.from(game.user.targets)[0];
let arrayLength = game.user.targets.size;

    for (let i = 0; i < arrayLength; i++) {
    let targetId = Array.from(game.user.targets)[i];
    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
            .atLocation(casterToken)
            .duration(1000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-500)
            .filter("Glow", { color: 0xabcdef })
        .effect()
            .file("jb2a.impact.004.blue")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.healing_generic.400px.blue")
            .fadeIn(100)
            .fadeOut(100)
            .scale(0.4, 0.45)
            .atLocation(targetId)
            .randomRotation()
    .play();
}