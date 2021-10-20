const casterId = canvas.tokens.get(args[0].tokenId);
const targetId = Array.from(game.user.targets)[0];
new Sequence()
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.intro.yellow")
        .scale(0.3)
        .atLocation(casterId)
        .waitUntilFinished(-550)
    .effect()
        .file("jb2a.shield.01.intro.purple")
        .atLocation(targetId)
        .scale(0.5)
        .opacity(0.5)
    .effect()
        .file("jb2a.magic_signs.rune.abjuration.outro.yellow")
        .scale(0.3)
        .atLocation(casterId)
    .play()