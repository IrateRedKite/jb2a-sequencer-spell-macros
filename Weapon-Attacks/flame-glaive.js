await Sequencer.Preloader.preloadForClients(
    ["jb2a.glaive.melee.01.orange",
        "jb2a.flames.01.orange"
    ], false)

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
    .file("jb2a.glaive.melee.01.orange")
    .atLocation(casterToken)
    .stretchTo(target)
    .filter("Glow", { color: 0xFFC300 })
    .waitUntilFinished(-500)

.effect()
    .from(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(500)
    .atLocation(target)
    .filter("Glow", { color: 0xFFC300 })
    .playIf(targetHit)

.effect()
    .file("jb2a.flames.01.orange")
    .atLocation(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(300)
    .playIf(targetHit)

.play()