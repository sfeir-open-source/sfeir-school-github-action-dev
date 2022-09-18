<!-- .slide: class="two-column with-code-bg-dark" -->

# Testing Shell script with Bats

## test.bats

```sh [2-3|5|6|7|10-13,15-18,20-23]
setup() {
    load 'test_helper/bats-support/load'
    load 'test_helper/bats-assert/load'

    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    export KEY=bar
    PATH="$DIR/../.:$PATH"
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
```

##--##

# Testing Shell script with Bats

## In the testing workflow

**testing.yaml**

```yaml
- name: bats usecase
  run: test/bats/bin/bats test/test.bats
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
