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
    .opacity(0.8)
    .filter("Glow", { color: 0xffa500 })
    .scaleIn(0, 500, { ease: "easeOutCubic", delay: 100 })
.effect()
    .file("jb2a.smoke.puff.centered.dark_black")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .randomRotation()
.effect()
    .file("jb2a.fire_bolt.orange")
    .atLocation(casterToken)
    .stretchTo(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI
.effect()
    .file("jb2a.impact.009.orange")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .delay(1000)
    .scaleToObject()
    .playIf(args[0].hitTargets.length === 1)
.play();