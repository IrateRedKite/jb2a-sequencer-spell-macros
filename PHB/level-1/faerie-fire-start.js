const casterToken = canvas.tokens.get(args[0].tokenId);
const template = canvas.templates.placeables[canvas.templates.placeables.length-1];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
            .atLocation(casterToken)
            .duration(4000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .waitUntilFinished(-2000)
            .filter("Glow", { color: 0x7D87BF }) 
    .play();


    canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);