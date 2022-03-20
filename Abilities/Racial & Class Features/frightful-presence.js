const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = Array.from(game.user.targets)[0];

//To do - checking for if target saves or not.
//let targetSave = args[0].saves.length === 1;

new Sequence()

.sound()
    .file("/worlds/doip/sounds/dragonroar.mp3")

.effect()
    .file("jb2a.extras.tmfx.inpulse.circle.03")
    .atLocation(casterToken)
    .filter("Glow", { color: 0xFFC300 })
    .duration(2000)
    .scale(1)
    .belowTokens()
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.energy_strands.complete.orange.01")
    .atLocation(casterToken)
    .duration(2500)
    .fadeIn(500)
    .fadeOut(300)
    .scale(1)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.icon.fear.orange")
    .atLocation(casterToken)
    .duration(2500)
    .fadeIn(500)
    .fadeOut(300)
    .scaleToObject()
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.markers.fear.orange.02")
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .persist()
    //   .playIf(targetSave)

.play()