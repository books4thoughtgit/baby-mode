require('./content/blocks');

Events.on(WorldLoadEvent, e => {
    Vars.state.rules.editor = true
    Vars.state.rules.waves = true
});