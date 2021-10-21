const casterToken = canvas.tokens.controlled[0];
if (!casterToken) {
	ui.notifications.warn("Please select a valid token to use this ability.");
	return;
}


let dancingLightCount = 1;
let currentDancingLightCount = 0;
let hasPlayedAnimation = false;
let createDancingLight = undefined;
if (!createDancingLight) {
    createDancingLight = async () => {
        if (typeof dancingLightCount !== "number" || dancingLightCount <= 0)
            return;

        await warpgate.spawn("Dancing Light", {}, {
            pre: async (location, updates) => {
                // When the user has clicked where they want it

                if (!hasPlayedAnimation) {
                    hasPlayedAnimation = true;
                    new Sequence()
                        .effect()
                            .file("jb2a.magic_signs.rune.evocation.intro.pink")
                            .scale(0.3)
                            .atLocation(casterToken)
                            .waitUntilFinished(-550)
                        .effect()
                            .file("jb2a.magic_signs.rune.evocation.loop.pink")
                            .scale(0.3)
                            .atLocation(casterToken)
                            .fadeIn(100)
                            .fadeOut(100)
                            .waitUntilFinished(-550)
                            .duration(1000)
                        .effect()
                            .file("jb2a.magic_signs.rune.evocation.outro.pink")
                            .scale(0.3)
                            .atLocation(casterToken)
                        .play();
                }
            },
            post: async (location, spawnedToken, updates, iteration) => {
                // When the token has been spawned

                new Sequence()
                    .effect()
                        .file("jb2a.energy_strands.range.standard.purple")
                        .gridSize(1)
                        .atLocation(casterToken)
                        .reachTowards(location)
                        .missed(args[0].hitTargets.length === 0)
                        .filter("Glow", { color: 0xffffff})
                        .async()
                        .play();

                if (++currentDancingLightCount < dancingLightCount) {
                    await createDancingLight();
                }
            }
        }, {
            controllingActor: casterToken.actor,
            collision: false,
        });
    }
}

new Dialog({
    title: "Dancing Lights",
    content: `
        <div class="form-group">
            <label>Dancing Light Count: <span id="dancing-light-count">4</span></label>
            <input type="range" id="dancing-light-range" value="4" min="1" max="4" oninput="$('#dancing-light-count').html(this.value)"/>
        </div>
    `,
    buttons: {
        one: {
            label: "Done",
            callback: (html) => {
                dancingLightCount = parseInt(html.find("#dancing-light-range").val());
                createDancingLight();
            }
        }
    },
    default: "one"
}).render(true);