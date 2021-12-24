const core = require('@actions/core');
const execa = require('execa');

const command = `kill $(ps aux | grep port-forward | grep 8080 | awk '{print $2}')`;
core.debug(`cmd: ${command}`);

execa.command(command, {
    detached: false,
    stdio: 'ignore',
});

core.info(`Killed the portforwarded process`)