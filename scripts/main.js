require('./content/blocks');

Events.on(WorldLoadEvent, e => {
    Vars.state.rules.infiniteResources = true
});
