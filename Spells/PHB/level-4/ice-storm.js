await Sequencer.Preloader.preloadForClients(
    ["jb2a.fire_bolt.blue",
        "jb2a.extras.tmfx.inflow.circle.02",
        "jb2a.magic_signs.circle.02.evocation.intro.blue",
        "jb2a.ice_spikes.radial.burst.blue"
    ], false)

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let iceTemplate = canvas.templates.get(args[0].templateId)
let tokenD = canvas.tokens.get(args[0].tokenId);

let templatePosition = iceTemplate.position;

await iceTemplate.document.delete();

new Sequence()
    .effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0x7393B3 })
    .waitUntilFinished(-500)

.effect()
    .file("autoanimations.range.firebolt.01.blue")
    .atLocation(tokenD)
    .startTime(350)
    .stretchTo(templatePosition)
    .waitUntilFinished(-1000)


.effect()
    .file("jb2a.extras.tmfx.inflow.circle.02")
    .atLocation(templatePosition)
    .fadeIn(500)
    .filter("Glow", { color: 0x7393B3 })
    .fadeOut(500)
    .scale(2.5)
    .opacity(0.3)
    .belowTokens()


.effect()
    .file("jb2a.magic_signs.circle.02.evocation.intro.blue")
    .atLocation(templatePosition)
    .scale(1)
    .waitUntilFinished(250)
    .belowTokens()

.effect()
    .file("jb2a.ice_spikes.radial.burst.blue")
    .atLocation(templatePosition)
    .scale(1.5)
    .wait(150)

.effect()
    .file("jb2a.sleet_storm.blue")
    .atLocation(templatePosition)
    .scale(1)
    .fadeIn(300)
    .scaleIn(0, 300, { ease: "easeOutSine" })
    .persist()
    .fadeOut(2000)
    .belowTokens()

.play()