Sequencer.Preloader.preloadForClients(
    "jb2a.fireball.beam.orange",
    "jb2a.fireball.explosion.orange",
    "jb2a.flames.01.orange")

const casterToken = canvas.tokens.get(args[0].tokenId);
if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

let fireTemplate = canvas.templates.get(args[0].templateId);
let templatePosition = fireTemplate.position;
//MidiQOL.selectTargetsForTemplate(fireTemplate);


const targetLocations = Array.from(game.user.targets);
//let targetLocations = Array.from(game.user.targets)[0];

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

sequence.effect()
    .file("misc/Blast_Mark_A2_2x2.png")
    .atLocation(templatePosition)
    .scale(2.5)
    .fadeIn(300)
    .scaleIn(0, 300, { ease: "easeOutSine" })
    .duration(3000)
    .filter("Glow", { color: 0xff8c00 })
    .fadeOut(350)
    .belowTokens()


sequence.effect()
    .file("misc/Blast_Mark_A2_2x2.png")
    .atLocation(templatePosition)
    .scale(2.5)
    .fadeIn(300)
    .duration(10000)
    .fadeOut(2000)
    .belowTokens()

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