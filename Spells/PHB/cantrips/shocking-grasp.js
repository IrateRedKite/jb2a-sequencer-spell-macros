const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];

new Sequence()
.effect()
    .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0x5e899e })
    .opacity(0.8)
    .waitUntilFinished(-1000)
.effect()
     .file("jb2a.static_electricity.02.blue")
     .atLocation(casterToken)
     .belowTokens()
     .fadeOut(500)
     .duration(1800)
     .fadeIn(500)
    .scale(0.7)
.effect()
    .file("jb2a.impact.011.blue")
    .atLocation(target)
    .scaleToObject(2)
.play();