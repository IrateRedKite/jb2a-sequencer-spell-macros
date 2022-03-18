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
    .scaleToObject(2)
    .filter("Glow", { color: 0x26abff })
.effect()
    .file("jb2a.energy_strands.complete.blue.01")
    .atLocation(casterToken)
    .fadeIn(500)
    .duration(2200)
    .fadeOut(500)
    .scaleToObject(2)
    .waitUntilFinished(-500)
.effect()
    .file("jb2a.ray_of_frost.blue")
    .atLocation(casterToken)
    .stretchTo(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI

.play();