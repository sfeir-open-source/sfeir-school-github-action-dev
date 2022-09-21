const core = require('@actions/core');
const glob = require('@actions/glob');
const path = require('path');
const fs = require('fs');

async function run() {
  try {
    const patterns = ['**/package.json', '!node_modules/**/package.json'];
    const globber = await glob.create(patterns.join('\n'));
    const files = await globber.glob();

    var analysedPackageJsonCount = files.length;
    var missingPackageLockJsonCount = 0;
    files.forEach(file => {
      try {
        fs.accessSync(path.join(path.dirname(file), 'package-lock.json'));
      } catch (err) {
        core.warning("Consider to generate it and commit it", {
          title: "Missing package-lock.json",
          file: file
        });
        missingPackageLockJsonCount++;
      }
    });

    var analysis = core.summary.addHeading('Package.json analysis');
    if (analysedPackageJsonCount > 0) {
      if (missingPackageLockJsonCount > 0) {
        analysis.addRaw(`Missing ${missingPackageLockJsonCount} package-lock.json files based on ${analysedPackageJsonCount} package.json files analysed`, true);
      } else {
        analysis.addRaw(`No missing package-lock.json files based on ${analysedPackageJsonCount} package.json files analysed`, true);
      }
    } else {
      analysis.addRaw('No package.json found', true);
    }
    await analysis.write();
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
