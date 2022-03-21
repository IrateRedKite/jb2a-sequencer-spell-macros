const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

new Sequence()
    .effect()
        .file("jb2a.markers.bubble.outro.rainbow")
        .scaleToObject(2)
        .atLocation(casterToken)
        .fadeIn(500)
        .fadeOut(500)
        .belowTokens()
    .effect()
        .file("jb2a.extras.tmfx.runes.circle.outpulse.transmutation")
        .atLocation(args[0].tokenId)
        .duration(2800)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xadd8e6 })
        .opacity(0.8)
    .effect()
        .file("jb2a.extras.tmfx.outpulse.circle.02.normal")
        .atLocation(args[0].tokenId)
        .duration(2800)
        .fadeIn(500)
        .fadeOut(500)
        .scale(0.5)
        .filter("Glow", { color: 0xadd8e6 })
        .opacity(0.8)
    .play()