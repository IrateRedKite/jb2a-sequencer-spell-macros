const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = canvas.tokens.get(args[0].targets[0].id);
let targetImg = Array.from(game.user.targets)[0].data.img;

new Sequence()

.effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.enchantment")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.markers.light.loop.blue")
    .atLocation(casterToken)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.swirling_sparkles.01.blue")
    .atLocation(target)
    .waitUntilFinished(-250)

.effect()
    .file(targetImg)
    .fadeOut(500)
    .atLocation(target)
    .scaleIn(0, 500, { ease: "easeInCubic", delay: 0 })
    .scaleToObject(3)
    .waitUntilFinished(-250)

.effect()
    .file(targetImg)
    .fadeOut(500)
    .atLocation(target)
    .scaleIn(0, 500, { ease: "easeInCubic", delay: 0 })
    .scaleToObject(3)
    .waitUntilFinished(-250)

.effect()
    .file("jb2a.ward.star.yellow.02")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject(2.5)
    .persist()
    .belowTokens()

.play()