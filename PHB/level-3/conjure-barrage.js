const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
const targetId = Array.from(game.user.targets)[0];
if (!targetId) {
	ui.notification.warn("This spell requires at least one valid target.");
	return;
}

let myStringArray = Array.from(game.user.targets)[0];
let arrayLength = game.user.targets.size;
for (let i = 0; i < arrayLength; i++) {
let targetId = Array.from(game.user.targets)[i];
new Sequence()
.effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.conjuration")
        .atLocation(casterToken)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .opacity(0.3)
        .filter("Glow", { color: 0xcc8899 })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.moonbeam.01.intro.blue")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)
        .duration(1200)
        .waitUntilFinished(-500)
    .effect()
        .file("jb2a.dagger.throw.01.white.15ft")
        .atLocation(casterToken)
        .reachTowards(targetId)
        .randomOffset()
        .repeats(5, 30, 60, 120)
    .play();
}

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);