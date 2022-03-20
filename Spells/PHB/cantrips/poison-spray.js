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
    .file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .opacity(0.3)
    .filter("Glow", { color: 0x89F423 })
    .scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
    .effect()
    .file("jb2a.moonbeam.01.intro.green")
    .atLocation(casterToken)
    .fadeIn(100)
    .fadeOut(200)
    .duration(1200)
    .waitUntilFinished(-1500)
    .effect()
    .file("jb2a.breath_weapons.acid.line.green")
    .atLocation(casterToken)
    .stretchTo(targetId)
    .play();