//This is for a homebrew item which on hit deals damage back to the attacker

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = canvas.tokens.get(args[0].targets[0].id);
//let targetImg = Array.from(game.user.targets)[0].data.img;

new Sequence()

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