const template = canvas.templates.placeables[canvas.templates.placeables.length-1];
const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}
new Sequence()
.effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(casterToken)
        .duration(1700)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xffa500 })
        .scaleIn(0, 500, {ease: "easeOutCubic", delay: 100})
    .effect()
        .file("jb2a.impact.yellow.5")
        .atLocation(casterToken)
        .fadeIn(100)
        .fadeOut(200)    
    .effect()
        .file("jb2a.burning_hands.02.orange")
        .atLocation(template.position, {cacheLocation: true})
        .stretchTo(template, {cacheLocation: true})
.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);