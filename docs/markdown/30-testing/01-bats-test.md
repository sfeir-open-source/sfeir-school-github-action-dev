<!-- .slide: class="two-column with-code-bg-dark" -->

# Testing Shell script with Bats

## test.bats

```sh [1-8|2-3|5-6|7|10-13,15-18,20-23|25-27]
setup() {
    DIR="$(cd "$(dirname "$BATS_TEST_FILENAME")" >/dev/null 2>&1 && pwd)"
    PATH="$DIR/..:$PATH"

    load "$DIR/test_helper/bats-support/load"
    load "$DIR/test_helper/bats-assert/load"
    export KEY=bar
}

@test "check main.sh is working" {
    run main.sh foo
    assert_output 'Doing stuff... foo (bar)'
}

@test "check cleanup.sh is working" {
    run cleanup.sh foo
    assert_output 'Cleaning up... foo (bar)'
}

@test "check setup.sh is working" {
    run setup.sh foo
    assert_output 'Setting up... foo (bar)'
}

teardown() {
    # eg. Cleanup created files
}
```

Notes:

Speaker **Thibauld**

- `setup` step that prepare the test environment to run specific use case
  - load library eg. bats-support and bats-assert that provide error reporting, test assertions etc.
  - setup path
  - export environment variable
- Execute tests
- `teardown` step that can be used to clean up things eg. created files

##--##

# Testing Shell script with Bats

## In the testing workflow

**testing.yaml**

```yaml
- name: bats usecase
  run: |
    ${GITHUB_WORKSPACE}/tests/bats/bin/bats ${GITHUB_WORKSPACE}/tests/tests.bats
  shell: bash
```

**output**

```shell
test.bats
 ✓ check main.sh is working
 ✓ check cleanup.sh is working
 ✓ check setup.sh is working

3 tests, 0 failures
```

Notes:

Speaker **Thibauld**
