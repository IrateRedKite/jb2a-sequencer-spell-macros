const casterToken = canvas.tokens.get(args[0]);
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}

const casterId = casterToken.tokenId;
new Sequence()
    .effect()
        .file("jb2a.fire_bolt.orange")
        .atLocation(casterId)
        .reachTowards(args[0].targets[0])
        .missed(args[0].hitTargets.length === 0)
        .filter("Glow", { color: 0xffffff })
        .waitUntilFinished()
    .play()