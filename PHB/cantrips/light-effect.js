//NOTE: This needs to go into the effect's macro.execute property, rather than midi's 'On Item Use' field.

let targetID = canvas.tokens.get(args[1].tokenId);

if(args[0] === "on"){
    // If the dynamic active effect started
    targetID.document.update({ light:{ bright : 20, dim: 40, color : '#ffffff', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}})
}
    if(args[0] === "off"){
        // If the dynamic active effect ended
        Sequencer.EffectManager.endEffects({ name: `faerie-fire-${targetID.id}`, object: targetID });
        targetID.document.update({ light:{ bright : 0, dim: 0, color : '#000000', alpha: 0.5, angle: 360, animation:{ type: "pulse", speed: 5, intensity: 5}}})

    }    