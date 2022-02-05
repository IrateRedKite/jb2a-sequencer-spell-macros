await Sequencer.Preloader.preloadForClients([
    "jb2a.energy_strands.complete.dark_red.01",
    "jb2a.energy_strands.range.standard.dark_red.01"
], false)

// remove the damage from the Shadow of Moil Chat Card, Create a new item and add the damage to it then apply the attack macro to that

const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];
//Delete the comment on this line, formatting breaks the layout
//let damageTotal = game.modules.get("midi-qol").damageRoll ?.total ?? 16;

new Sequence()

.effect()
    .file("jb2a.energy_strands.complete.dark_red.01")
    .atLocation(casterToken)
    .fadeIn(500)
    .fadeOut(500)
    .scaleToObject()

.effect()
    .file("jb2a.energy_strands.range.standard.dark_red.01")
    .repeats(Math.max(1, Math.floor(damageTotal / 2)), 100, 200)
    .randomizeMirrorY()
    .atLocation(target)
    .stretchTo(casterToken)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI
    .play();