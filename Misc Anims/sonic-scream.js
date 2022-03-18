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
        .file("jb2a.side_impact.part.shockwave.blue")
        .atLocation(casterToken)
        .reachTowards(targetId)
        .randomOffset()
        .repeats(5, 90, 120, 150)
    .play();
}

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);