require('./content/blocks');

Events.on(WorldLoadEvent, e => {
    Vars.state.rules.infiniteResources = true
    Vars.state.rules.instantBuild = true
    Vars.state.rules.waves = true
});
