const core = require('@actions/core');
const glob = require('@actions/glob');
const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const patterns = ['**/package.json', '!node_modules/**/package.json'];
    const globber = await glob.create(patterns.join('\n'));
    const files = await globber.glob();
    files.forEach(file => {
      try {
        fs.accessSync(path.join(path.dirname(file), 'package-lock.json'));
      } catch (err) {
        core.warning("Consider to generate it and commit it", {
          title: "Missing package-lock.json",
          file: file
        });
      }
    });
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
