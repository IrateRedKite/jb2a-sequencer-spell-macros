const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(args[0].tokenId)
        .duration(1500)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-1200)
        .filter("Glow", { color: 0xffffbf })
        .opacity(0.8)
    .effect()
        .file("jb2a.markers.light.intro.yellow")
        .atLocation(args[0].tokenId)
        .belowTokens()
        .fadeOut(500)
        .duration(1200)
        .fadeIn(500)
        .scale(0.7)
    .effect()
        .file("jb2a.explosion.03.blueyellow")
        .atLocation(template.position)
.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);