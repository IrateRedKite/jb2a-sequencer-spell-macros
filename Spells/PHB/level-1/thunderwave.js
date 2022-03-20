const template = canvas.templates.placeables[canvas.templates.placeables.length-1];

new Sequence()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(args[0].tokenId)
        .duration(2000)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0x5e899e })
        .opacity(0.8)
        .waitUntilFinished(-1000)
    .effect()
        .file("jb2a.static_electricity.02.blue")
        .atLocation(args[0].tokenId)
        .belowTokens()
        .fadeOut(500)
        .duration(1800)
        .fadeIn(500)
        .scale(0.7)
    .effect()
        .file("jb2a.call_lightning.low_res.blueorange")
        .atLocation(template.position)
        .duration(1500)
        .fadeIn(500)
        .fadeOut(500)
        .opacity(0.5)
        .scale(0.3)
        .offset({ x: -150, y: -150 })
    .effect()
        .file("jb2a.thunderwave.center.blue")
        .atLocation(template.position)
        .offset({ x: -150, y: -150 })
.play();

canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);


