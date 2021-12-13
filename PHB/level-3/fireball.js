//Preloading the Files to make sure they play a bit nicer when animatiing.
Sequencer.Preloader.preloadForClients(
    "jb2a.fireball.beam.orange",
    "jb2a.fireball.explosion.orange",
    "jb2a.flames.01.orange")

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

await fireTemplate.delete();

let sequence = new Sequence()

sequence.effect()
    .file("jb2a.extras.tmfx.runes.circle.inpulse.evocation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0x7393B3 })
    .waitUntilFinished(-500)

sequence.effect()
    .file("jb2a.fireball.beam.orange")
    .atLocation(casterToken)
    .reachTowards(templatePosition)
    .waitUntilFinished(-1000)

sequence.effect()
    .file("jb2a.fireball.explosion.orange")
    .atLocation(templatePosition)
    .waitUntilFinished(-2100)


//blast mark from the forgotten adventures site, you need to find your own blast mark or use the agreed one by JB2A and FA
sequence.effect()
    .file("misc/Blast_Mark_A2_2x2.png")
    .atLocation(templatePosition)
    .scale(2)
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
        .filter("Glow", { color: 0xFFA500 })
}

//loop through targets and play only if failed save (to do)
for (let targetLoc of targetLocations) {
    sequence.effect()
        .file("jb2a.flames.01.orange")
        .filter("Glow", { color: 0xffa700 })
        .atLocation(targetLoc)
        .fadeIn(500)
        .fadeOut(500)
        .duration(2000)


}

sequence.play()