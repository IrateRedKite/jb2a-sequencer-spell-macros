const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(args[0].tokenId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .waitUntilFinished(-1500)
        .filter("Glow", { color: 0xafeeee })
        .opacity(0.8)
    .effect()
        .file("jb2a.markers.light.intro.blue")
        .atLocation(args[0].tokenId)
        .belowTokens()
        .fadeOut(500)
        .duration(1800)
        .fadeIn(500)
        .scale(0.7)
    .effect()
        .file("jb2a.shatter.blue")
        .atLocation(template.position)
.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);