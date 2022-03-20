// requires JB2A, Sequencer, and Warpgate
//Credit to david (aka claudekennilol) for initial Pathfinder version and Tupsi for initial 5e version

Sequencer.Preloader.preloadForClients(
    "jb2a.magic_signs.circle.02.conjuration.intro.red",
    "jb2a.portals.vertical.vortex.red",
    "jb2a.magic_signs.circle.02.conjuration.intro.blue",
    "jb2a.portals.vertical.vortex.blue")

let tokenD = canvas.tokens.get(args[0].tokenId);

if (!tokenD) {
    ui.notifications.warn("Please select a valid token to use this ability.");
    return;
}

const config = {
    drawIcon: false,
    interval: tokenD.data.width % 2 === 0 ? 1 : -1,
    label: 'Dimension Door',
    size: tokenD.w / canvas.grid.size,
}
if (typeof item !== 'undefined') {
    config.drawIcon = true;
    config.icon = item.img;
    config.label = item.name;
}

const position = await warpgate.crosshairs.show(config);

const portalScale = tokenD.w / canvas.grid.size * .7;

const magicSign = new Sequence().effect()
    .file('jb2a.magic_signs.rune.conjuration.intro.red')
    .atLocation(tokenD)
    .scale(portalScale * .7)
    .opacity(0.5)
    .waitUntilFinished(-600);

const introSequence = new Sequence()

introSequence.effect()
    .file('jb2a.magic_signs.circle.02.conjuration.intro.red')
    .atLocation(tokenD)
    .offset({ y: (tokenD.height) })
    .scaleToObject(2)
    .fadeIn(200)
    .fadeOut(500)
    .belowTokens()
    .waitUntilFinished(-1000);

introSequence.effect()
    .file('jb2a.portals.vertical.vortex.red')
    .atLocation(tokenD)
    .offset({ y: (tokenD.height) })
    .scale(portalScale)
    .duration(1500)
    .fadeIn(200)
    .fadeOut(500);

introSequence.animation()
    .on(tokenD)
    .opacity(0);

introSequence.effect()
    .from(tokenD)
    .moveTowards({ x: tokenD.center.x, y: tokenD.center.y - tokenD.h })
    .zeroSpriteRotation()
    .fadeOut(500)
    .duration(500);

introSequence.wait(250);

const outroSequence = new Sequence();

outroSequence.effect()
    .file('jb2a.magic_signs.circle.02.conjuration.intro.blue')
    .atLocation(position)
    .scaleToObject(2)
    .offset({ y: (tokenD.height) })
    .fadeIn(200)
    .fadeOut(500)
    .belowTokens()
    .waitUntilFinished(-1000);

outroSequence.effect()
    .file('jb2a.portals.vertical.vortex.blue')
    .atLocation(position)
    .offset({ y: (tokenD.height) })
    .scale(portalScale)
    .duration(1200)
    .fadeOut(500)
    .fadeIn(200);

outroSequence.effect()
    .from(tokenD)
    .atLocation({ x: position.x, y: position.y - tokenD.h })
    .fadeIn(500)
    .duration(1500)
    .moveTowards(position)
    .zeroSpriteRotation()
    .waitUntilFinished();

outroSequence.animation()
    .on(tokenD)
    .teleportTo(position, { relativeToCenter: true })
    .opacity(1);

await magicSign.play();
await introSequence.play();
await outroSequence.play();