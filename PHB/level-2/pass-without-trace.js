const template = canvas.templates.placeables[canvas.templates.placeables.length-1];
const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

    new Sequence()
        .effect()
            .file("jb2a.extras.tmfx.runes.circle.inpulse.abjuration")
            .atLocation(casterToken)
            .duration(2000)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.5)
            .filter("Glow", { color: 0x5b0a91 })
           .waitUntilFinished(-500)

        .effect()
            .file("jb2a.markers.light.intro.blue")
            .duration(1500)
            .fadeIn(500)
            .fadeOut(500)
            .scale(0.7)

        .effect()
            .file("jb2a.extras.tmfx.border.circle.outpulse.01.normal")
            .attachTo(casterToken)
            .fadeIn(500)
            .filter("Glow", { color: 0x431c53 })
            .fadeOut(500)
            .scale(2.5)
            .opacity(0.3)
            .belowTokens()
            .persist()

    .play();

    canvas.scene.deleteEmbeddedDocuments("MeasuredTemplate", [template.data._id]);