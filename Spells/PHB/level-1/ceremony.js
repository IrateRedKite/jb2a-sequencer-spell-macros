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
            .file("jb2a.extras.tmfx.runes.circle.outpulse.abjuration")
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
            .file("jb2a.energy_strands.complete.blueorange.01")
            .fadeIn(1000)
            .duration(10000)
            .fadeOut(1000)
            .scaleToObject(1.5)
            .atLocation(targetId)
            .randomRotation()
    .play();
}