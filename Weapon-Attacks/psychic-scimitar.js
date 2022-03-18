await Sequencer.Preloader.preloadForClients(
    ["jb2a.scimitar.melee.01.purple",
        "jb2a.markers.01.purplepink"
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
    .file("jb2a.scimitar.melee.01.purple")
    .atLocation(casterToken)
    .stretchTo(target)
    .waitUntilFinished(-500)

.effect()
    .file("jb2a.impact.004.pinkpurple")
    .atLocation(target)
    .fadeIn(500)
    .fadeOut(300)
    .playIf(targetHit)

.effect()
    .file("jb2a.markers.01.purplepink")
    .atLocation(target)
    .duration(1500)
    .fadeIn(500)
    .fadeOut(300)
    .playIf(targetHit)

.play()