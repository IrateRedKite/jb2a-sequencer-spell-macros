await Sequencer.Preloader.preloadForClients(
    "jb2a.disintegrate.orangepink",
    "jb2a.flames.01.orange")


const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = canvas.tokens.get(args[0].targets[0].id);
//let targetImg = Array.from(game.user.targets)[0].data.img;

new Sequence()

.effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0xFFA500 })
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.disintegrate.orangepink")
    .atLocation({ x: target.center.x, y: target.center.y - (canvas.grid.size * 2) })
    .stretchTo(target)
    .waitUntilFinished(-500)

.effect()
    .from(target)
    .duration(2500)
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .filter("Glow", { color: 0xFFA500 })
    .scaleToObject()

.effect()
    .file("jb2a.flames.01.orange")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .waitUntilFinished()

.play()