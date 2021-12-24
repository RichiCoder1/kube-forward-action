const core = require('@actions/core');

var pid = core.getState("pidOfPortFowardedProcess");

core.info(`Killing the portforwarded process with id ${pid}`)
process.kill(pid);