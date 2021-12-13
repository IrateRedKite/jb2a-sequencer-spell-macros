//This uses MIDI QOL to check for Hits before playing certain parts
const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let target = canvas.tokens.get(args[0].targets[0].id);
//midi checking for hit.
let targetHit = args[0].hitTargets.length === 1;

new Sequence()

.effect()
    .file("jb2a.shortsword.melee.01.white.4")
    .atLocation(casterToken)
    .reachTowards(target)
    .filter("Glow", { color: 0x0047AB })
    .waitUntilFinished(-500)

.effect()
    .from(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .filter("Glow", { color: 0x0047AB })
    .waitUntilFinished(-2500)
    .playIf(targetHit)

.effect()
    .file("jb2a.ice_spikes.radial.burst.blue")
    .atLocation(target)
    .scaleToObject()
    .randomOffset(0.5)
    .fadeIn(500)
    .fadeOut(300)
    .playIf(targetHit)

.play()