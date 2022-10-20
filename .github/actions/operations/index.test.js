const core = require('@actions/core');
const { runner } = require("./runner");
const { add, subtract, multiply } = require("./math");
const process = require('process');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');

test('make sure it returns something', async () => {
  const core = {
    getInput: jest.fn().mockResolvedValue(parseInt(42)),
    debug: jest.fn(),
    info: jest.fn(),
    warning: jest.fn(),
    setFailed: jest.fn(),
    setOutput: jest.fn()
  };
  const math = {
    add: jest.fn().mockReturnValue(1)
  };
  runner(core, math.add, subtract, multiply)
  expect(core.getInput).toHaveBeenCalledTimes(2);
  expect(core.debug).toHaveBeenCalledTimes(2);
  expect(core.info).toHaveBeenCalledTimes(3);
  expect(core.warning).toHaveBeenCalledTimes(1);
  expect(core.setOutput).toHaveBeenCalledTimes(3);
  expect(core.setFailed).toHaveBeenCalledTimes(0);
  expect(math.add).toHaveBeenCalledTimes(1);
});

describe("simple test", () => {
  it('test runs', () => {
    const filePath = path.join(__dirname, `test_outputs.log`)
    setupGitHubOutput(process, filePath);

    process.env['INPUT_INPUT1'] = 9;
    process.env['INPUT_INPUT2'] = 5;

    const ip = path.join(__dirname, 'index.js');
    cp.execSync(`node ${ip}`, { env: process.env });

    const contents = fs.readFileSync(filePath, 'utf8')
    try {
      verifyGitHubOutput(contents, "addition", "14");
      verifyGitHubOutput(contents, "subtraction", "4");
      verifyGitHubOutput(contents, "multiplication", "45");
    } finally {
      fs.unlinkSync(filePath)
    }
  })
});


function setupGitHubOutput(process, filePath) {
  process.env['GITHUB_OUTPUT'] = filePath;
  fs.appendFileSync(filePath, '', {
    encoding: 'utf8'
  })
}

function verifyGitHubOutput(contents, expectedKey, expectedValue) {
  const regex = `${expectedKey}<<ghadelimiter_.*${os.EOL}${expectedValue}${os.EOL}ghadelimiter_.*${os.EOL}`
  expect(contents).toMatch(new RegExp(regex));
}

describe("simple arithmetic", () => {
  describe("addition", () => {
    test("expect 9 + 5 = 14", () => {
      expect(add(9, 5)).toEqual(14);
    });
  });

  describe("subtract", () => {
    test("expect 9 - 5 = 4", () => {
      expect(subtract(9, 5)).toEqual(4);
    });
  });

  describe("multiply", () => {
    test("expect 9 * 5 = 45", () => {
      expect(multiply(9, 5)).toEqual(45);
    });
  });
});
