const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];

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
    .file("jb2a.liquid.splash_side.green")
    .atLocation(casterToken)
    .rotateTowards(target)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
.effect()
    .file("jb2a.bullet.03.green")
    .atLocation(casterToken)
    .stretchTo(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI
    .waitUntilFinished(-500)
.effect()
    .file("jb2a.liquid.splash.bright_green")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject(1.5)
.play();