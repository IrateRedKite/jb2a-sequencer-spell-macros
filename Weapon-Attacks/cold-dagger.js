const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = canvas.tokens.get(args[0].targets[0].id);

let targetHit = args[0].hitTargets.length === 1;

new Sequence()

.effect()
    .file("jb2a.shortsword.melee.01.white.4")
    .atLocation(casterToken)
    .reachTowards(target)
    .filter("Glow", { color: 0x0047AB })
    .waitUntilFinished(-500)
    .missed()

.effect()
    .from(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .filter("Glow", { color: 0x0047AB })
    .waitUntilFinished(-500)
    .playIf(targetHit)

.effect()
    .file("jb2a.markers.snowflake.dark_blue.02")
    .atLocation(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(300)
    .waitUntilFinished(-1500)
    .playIf(targetHit)

.play()