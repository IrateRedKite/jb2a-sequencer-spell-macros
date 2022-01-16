const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = Array.from(game.user.targets)[0];
//let targetImg = Array.from(game.user.targets)[0].data.img;

new Sequence()

.effect()
    .file("jb2a.sword.melee.01.white")
    .atLocation(casterToken)
    .stretchTo(target)
    .filter("Glow", { color: 0xffa700 })
    .waitUntilFinished(-500)
    .size(canvas.grid.size * 2)

.effect()
    .from(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .filter("Glow", { color: 0xffa700 })
    .scaleToObject()
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.flames.01.orange")
    .filter("Glow", { color: 0xffa700 })
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(500)
    .waitUntilFinished(-1500)
    .duration(1000)

.play()