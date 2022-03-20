await Sequencer.Preloader.preloadForClients(
    ["jb2a.ice_spikes.radial.burst.blue",
        "jb2a.dagger.melee.02.blue",
        "jb2a.side_impact.ice_shard.blue"
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
    .file("jb2a.dagger.melee.02.blue")
    .atLocation(casterToken)
    .stretchTo(target)
    .filter("Glow", { color: 0x0047AB })
    .waitUntilFinished(-1500)
    .missed(args[0].hitTargets.length === 0)

.effect()
    .file("jb2a.ice_spikes.radial.burst.blue")
    .atLocation(target)
    .scaleToObject()
    .fadeIn(500)
    .fadeOut(300)
    .playIf(targetHit)


.effect()
    .file("jb2a.side_impact.ice_shard.blue")
    .atLocation(target)
    .rotateTowards(target)
    .stretchTo(casterToken)
    .rotate(180)

.playIf(targetHit)

.play()