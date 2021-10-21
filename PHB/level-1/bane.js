const casterToken = canvas.tokens.controlled[0];
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
            .file("jb2a.extras.tmfx.runes.circle.outpulse.enchantment")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0xf02d2b })
        .effect()
            .file("jb2a.impact.004.dark_red")
            .atLocation(targetId)
            .fadeIn(500)
        .effect()
            .file("jb2a.energy_strands.overlay.dark_red.01")
            .fadeIn(100)
            .fadeOut(500)
            .duration(6000)
            .scale(0.4, 0.45)
            .atLocation(targetId)
            .randomRotation()
            .scaleIn(0, 500, {ease: "easeOutCubic"})
    .play();
}