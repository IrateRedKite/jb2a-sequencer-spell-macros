//Preloading the Files to make sure they play a bit nicer when animatiing.
await Sequencer.Preloader.preloadForClients(
    ["jb2a.extras.tmfx.runes.circle.inpulse.evocation",
        "jb2a.fireball.beam.purple",
        "jb2a.fireball.explosion.purple",
        "jb2a.flames.01.purple"
    ], false)

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
//get the template id from the canvas and its positions.
let fireTemplate = canvas.templates.get(args[0].templateId);
let templatePosition = fireTemplate.position;
//get an array of the targets within the tempalte area.
const targetLocations = Array.from(game.user.targets);

await fireTemplate.document.delete();

let sequence = new Sequence()

sequence.effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0x6a0dad })
    .waitUntilFinished(-500)

sequence.effect()
    .file("jb2a.fireball.beam.purple")
    .atLocation(casterToken)
    .stretchTo(templatePosition)
    .waitUntilFinished(-1000)

sequence.effect()
    .file("jb2a.fireball.explosion.purple")
    .atLocation(templatePosition)
    .waitUntilFinished(-2100)


//blast mark from the forgotten adventures site, you need to find your own blast mark or use the agreed one by JB2A and FA
sequence.effect()
    .file("jb2a.ground_cracks.purple.01")
    .atLocation(templatePosition)
    .scale(1)
    .fadeIn(300)
    .duration(10000)
    .fadeOut(500)
    .belowTokens()


for (let targetLoc of targetLocations) {
    sequence.effect()
        .from(targetLoc)
        .duration(2500)
        .fadeIn(500)
        .fadeOut(500)
        .atLocation(targetLoc)
        .filter("Glow", { color: 0x6a0dad })

    sequence.effect()
        .file("jb2a.flames.01.purple")
        .filter("Glow", { color: 0x6a0dad })
        .atLocation(targetLoc)
        .fadeIn(500)
        .fadeOut(500)
        .duration(2000)
}



sequence.play()