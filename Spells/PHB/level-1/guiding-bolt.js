const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];

new Sequence()
    .effect()
    .file("jb2a.markers.light.intro.yellow")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(1000)
    .belowTokens()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
    .atLocation(casterToken)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0xffffbf })
    .waitUntilFinished(-500)
    .effect()
    .file("jb2a.guiding_bolt.01.blueyellow")
    .fadeIn(500)
    .fadeOut(300)
    .atLocation(casterToken)
    .stretchTo(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI
    .play();