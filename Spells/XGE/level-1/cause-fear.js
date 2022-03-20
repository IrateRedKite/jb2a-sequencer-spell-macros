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
            .file("jb2a.extras.tmfx.runes.circle.outpulse.necromancy")
            .atLocation(casterToken)
            .duration(2000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-1000)
            .filter("Glow", { color: 0xd7e5f0 })
        .effect()
            .file("jb2a.impact.004.blue")
            .atLocation(targetId)
            .fadeIn(500)
            .randomRotation()
        .effect()
            .file("jb2a.toll_the_dead.blue.shockwave")
            .atLocation(targetId)
            .fadeIn(500)
            .scale(0.8, 1)
            .randomRotation()
        .effect()
            .file("jb2a.fireflies.many.02.blue")
            .atLocation(targetId)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.4,0.5)
            .randomRotation()
        .effect()
            .file("jb2a.toll_the_dead.blue.skull_smoke")
            .fadeIn(100)
            .fadeOut(100)
            .scale(0.4, 0.55)
            .atLocation(targetId)
            .scaleIn(0, 500, {ease: "easeOutCubic"})
        .play();
}