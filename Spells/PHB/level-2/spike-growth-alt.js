//Preloading the Files to make sure they play a bit nicer when animatiing.
await Sequencer.Preloader.preloadForClients(
    ["jb2a.extras.tmfx.runes.circle.inpulse.transmutation",
        "jb2a.arms_of_hadar.dark_green"
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
    .file("jb2a.extras.tmfx.runes.circle.inpulse.transmutation")
    .atLocation(casterToken)
    .duration(2000)
    .fadeIn(500)
    .fadeOut(500)
    .scale(0.5)
    .filter("Glow", { color: 0x6a0dad })
    .waitUntilFinished(-500)


sequence.effect()
    .file("jb2a.arms_of_hadar.dark_green")
    .atLocation(templatePosition)
    .scale(1.85)
    .fadeIn(300)
    .duration(10000)
    .fadeOut(500)
    .belowTokens()
    .opacity(0.5)

sequence.play()