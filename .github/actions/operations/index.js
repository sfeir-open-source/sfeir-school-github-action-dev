const core = require('@actions/core');
const { runner } = require("./runner");
const { add, subtract, multiply } = require("./math");

async function run() {
  runner(core, add, subtract, multiply);
}

run();
