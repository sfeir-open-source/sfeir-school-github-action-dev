const core = require('@actions/core');

async function run() {
  try {
    const who = core.getInput('who');
    core.notice(`Do stuff with ${who}`);
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
