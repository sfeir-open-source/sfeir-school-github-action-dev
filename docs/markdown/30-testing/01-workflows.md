<!-- .slide: class="with-code" -->

# Testing Workflows

In addition of testing the code, you can test the whole action from the user point of view in a GitHub Action workflow.

One test from [rlespinasse/slugify-value](https://github.com/rlespinasse/slugify-value/blob/v1.x/.github/workflows/slugify-value.yaml) action tests

```yaml [1-5|6-13]
- name: Slugify key/value
  uses: ./
  with:
    key: KEY_VALUE
    value: "Never gonna give you up Never gonna let you down"
- name: Validate // Slugify key/value
  run: |
    [[ "${{ env.KEY_VALUE }}" == "Never gonna give you up Never gonna let you down" ]]
    [[ "${{ env.KEY_VALUE_SLUG }}" == "never-gonna-give-you-up-never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_CS }}" == "Never-gonna-give-you-up-Never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_URL }}" == "never-gonna-give-you-up-never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_URL_CS }}" == "Never-gonna-give-you-up-Never-gonna-let-you-down" ]]
  shell: bash
```

##--##

<!-- .slide: class="with-code" -->

# Testing Workflows

## In the testing workflow

- A test suite can be seen as a job with the same workspace to work with.
- A test is composed of the **run of the action**, and the **step to test the output of the action**.

```yaml [7-19]
jobs:
  test-suite:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      # Test X
      - name: Test name
        id: test-id
        uses: ./ # Run the action locally
        with:
          var1: Value
          var2: Some Value
      - name: Validate // Test name
        run: |
          echo "Testing the result of the action run"
          [[ "${{ steps.test-id.outputs.output-id }}" == "valid output value" ]]
          [[ write another test ]]
        shell: bash
```

##--##

<!-- .slide: class="with-code" -->

# Testing Workflows

## What to do when you need to test the error cases?

Use

- `continue-on-error: true` on the action
- `outcome` and `conclusion` come from the [steps](https://docs.github.com/en/actions/learn-github-actions/contexts#steps-context) context

```yaml [8,11-12]
# Test X
- name: Test name
  id: test-id
  uses: ./ # Run the action locally
  with:
    var1: Value
    var2: Some Value
  continue-on-error: true # Don't stop on error
- name: Validate // Test name
  run: |
    [[ "${{ steps.test-id.outcome }}" == "failure" ]]
    [[ "${{ steps.test-id.conclusion }}" == "success" ]]
  shell: bash
```

##--##

<!-- .slide: class="with-code" -->

# Testing Workflows

Your action is valid for multiple OS runners, run your tests suite on all OS

```yaml [3-7]
jobs:
  test-suite:
    strategy:
      fail-fast: false                                     # Ensure that all test suites are executed
      matrix:                                              # Use matrix to run tests upon multiple OS
        os: [macos-latest, ubuntu-latest, windows-latest]
    runs-on: ${{ matrix.os }}
    steps:
      - uses: actions/checkout@v3

      # Test X
      ...
```
