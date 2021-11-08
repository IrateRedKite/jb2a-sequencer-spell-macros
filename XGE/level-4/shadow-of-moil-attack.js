const casterToken = canvas.tokens.get(args[0].tokenId);

if (!casterToken) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}
let target = Array.from(game.user.targets)[0];
let damageTotal = game.modules.get("midi-qol").damageRoll?.total ?? 16;

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
    .atLocation(casterToken)
    .reachTowards(target)
    .playIf(args[0].hitTargets.length === 1) // Comment this line out if not using MIDI
    .play();