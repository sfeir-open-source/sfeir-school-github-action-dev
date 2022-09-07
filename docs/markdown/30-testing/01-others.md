<!-- .slide: class="with-code" --> 

# Testing any other programming language based code

**You will have nothing** except the programming language testing tools itself.

For example, if your code rely on Shell scripts, you can use [**bats** 🔗](https://github.com/bats-core/bats-core).

In practice, Shell scripts are easly used on Docker container action and Composite action to serve as wrapper or to do the all works.
If both cases, you can use **bats** to help you write a test suite for your action.

##--##

# Testing Shell script with Bats

Setup your repository by adding bats and utilities as submodules

```text
action.yaml
src/
    cleanup.sh
    main.sh
    setup.sh
            ...
test/
    bats/               <- submodule
    test_helper/
        bats-support/   <- submodule
        bats-assert/    <- submodule
    test.bats
    ...
```

- Required github submodule to work : 
    - `test/bats` 👉 [**Go to reference** 🔗](https://github.com/bats-core/bats-core.git)
    - `test/test_helper/bats-support` 👉 [**Go to reference** 🔗](https://github.com/bats-core/bats-support.git)
    - `test/test_helper/bats-assert` 👉 [**Go to reference** 🔗](https://github.com/bats-core/bats-assert.git)

##--##

# Testing Shell script with Bats

- Easy way to write action following the [**Test-driven development method** 🔗](https://en.wikipedia.org/wiki/Test-driven_development)

- `setup` step can be made to prepare the test environment to run specific use case
  - export ENV variable
  - load library eg. bats-support and bats-assert that provide error reporting, test assertions etc.
  - ...
- `teardown` step can be used to clean up things eg. created files

**test.bats** 

```
setup() {
    load 'test_helper/bats-support/load'
    load 'test_helper/bats-assert/load'

    DIR="$( cd "$( dirname "$BATS_TEST_FILENAME" )" >/dev/null 2>&1 && pwd )"
    export KEY=bar
    PATH="$DIR/../.github/actions/runs-using-docker:$PATH"
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
      # Test 3
      - name: bats usecase
        id: test-3
        run: |
          ${GITHUB_WORKSPACE}/test/bats/bin/bats ${GITHUB_WORKSPACE}/test/test.bats
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