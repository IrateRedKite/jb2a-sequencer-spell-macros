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
            .filter("Glow", { color: 0xfefebe })
            .opacity(0.5)
        .effect()
            .file("jb2a.extras.tmfx.outpulse.circle.01.slow")
            .atLocation(targetId)
            .fadeIn(500)
            .fadeOut(500)
            .filter("Glow", { color: 0xfefebe })
        .effect()
            .file("jb2a.bless.200px.intro.yellow")
            .fadeIn(100)
            .fadeOut(500)
            .duration(6000)
            .atLocation(targetId)
            .randomRotation()
            .belowTokens()
            .scaleToObject(2)
    .play();
}