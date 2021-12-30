const core = require('@actions/core');
const execa = require('execa');

const targetRef = core.getInput('targetRef', { required: true });
const namespace = core.getInput('namespace', { required: false }) || 'default';
const port = core.getInput('port', { required: true });

const portForwardCommand = `kubectl port-forward --namespace=${namespace} ${targetRef} ${port}`;

const command = `kill $(ps aux | grep ${portForwardCommand} | awk '{print $2}')`;
core.debug(`cmd: ${command}`);

execa.command(command, {
    detached: false,
    stdio: 'ignore',
});

core.info(`Killed the portforwarded process`)