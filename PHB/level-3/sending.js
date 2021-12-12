const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

new Sequence()
    .effect()
        .file("jb2a.impact.003.dark_red")
        .scaleToObject(2)
        .atLocation(casterToken)
    .effect()
        .file("jb2a.markers.runes.dark_red.01")
        .scaleToObject(2)
        .atLocation(casterToken)
        .fadeIn(500)
        .duration(2800)
        .fadeOut(500)
        .opacity(0.8)
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.evocation")
        .atLocation(args[0].tokenId)
        .duration(2800)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xc00000 })
        .opacity(0.8)
    .play()