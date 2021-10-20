const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.intro.red")
        .scale(0.3)
        .atLocation(casterId)
        .offset({ x: 55, y: -45 })
        .rotate(25)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.intro.red")
        .scale(0.3)
        .atLocation(casterId)
        .offset({ x: -78, y: 60 })
        .delay(200)
        .rotate(35)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.intro.red")
        .scale(0.3)
        .atLocation(casterId)
        .offset({ x: -40, y: -25 })
        .delay(400)
        .rotate(-15)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.magic_signs.rune.enchantment.intro.red")
        .scale(0.3)
        .atLocation(casterId)
        .offset({ x: 80, y: 40 })
        .delay(600)
        .rotate(-20)
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.energy_strands.range.standard.dark_red.01")
        .gridSize(1)
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .delay(400)
        .waitUntilFinished(-1500)
    .effect()
        .file("jb2a.energy_strands.overlay.dark_red.01")
        .scale(0.3)
        .atLocation(targetId)
        .fadeIn(200)
        .fadeOut(200)
    .play()