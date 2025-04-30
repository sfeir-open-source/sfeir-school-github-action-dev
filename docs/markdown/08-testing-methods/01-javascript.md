<!-- .slide: -->

# Testing JavaScript based code

Every testing framework can be used to make JavaScript tests.

For example, you can use [Jest](https://jestjs.io/).

Notes:

##==##

# Why using a javascript test framework ?

- Zero config
- Isolated tests
- Run with `npm test`
- Easy mocking

Notes:

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Testing an action with Jest

```yaml
- uses: ./.github/actions/operations
  with:
    input1: 9
    input2: 5
```

Will output

- `addition` equals to `14`
- `subtraction` equals to `4`
- `multiplication` equals to `45`

[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/operations-testing.yaml)
<!-- .element: class="credits" -->

Notes:


##==##

<!-- .slide: class="with-code-bg-dark" -->

# Testing an action with Jest

**Test suite**

```js [1,19|2-6|8-12|14-18]
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
```

[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/operations-testing.yaml)
<!-- .element: class="credits" -->

Notes:

For the operations **math.js** file, we can test its exposed function.

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Testing an action with Jest

**Run** the main file

```js [9-10|6-7|3-4|12-19]
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
```

[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/operations-testing.yaml)
<!-- .element: class="credits" -->

Notes:


##==##

<!-- .slide: class="with-code-bg-dark" -->

# Testing an action with Jest

**Mock** some methods and test their usage.

```js [13|2-9|10-12|14-20]
test('make sure it returns something', async () => {
  const core = {
    getInput: jest.fn().mockResolvedValue(parseInt(43)),
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
```

[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/operations-testing.yaml)
<!-- .element: class="credits" -->

Notes:


`spyOn` and `mockOn` also exists to help you with your tests
