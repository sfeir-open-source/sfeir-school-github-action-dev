<!-- .slide: class="with-code-bg-dark" -->

# Testing any other programming language based code

**You will have nothing** except the programming language testing tools itself.

For example, if your code rely on Shell scripts, you can use [bats](https://github.com/bats-core/bats-core).

In practice, Shell scripts are easly used on Docker container action and Composite action to serve as wrapper or to do the all works.
If both cases, you can use **bats** to help you write a test suite for your action.

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Testing Shell script with Bats

Setup your repository by adding bats and utilities as submodules

```text [1-5|8,10-11|12]
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

- Required github submodule to work
  - `test/bats` 👉 [Go to reference](https://github.com/bats-core/bats-core.git)
  - `test/test_helper/bats-support` 👉 [Go to reference](https://github.com/bats-core/bats-support.git)
  - `test/test_helper/bats-assert` 👉 [Go to reference](https://github.com/bats-core/bats-assert.git)

##--##

# Testing Shell script with Bats

- Easy way to write action following the [Test-driven development method](https://en.wikipedia.org/wiki/Test-driven_development)

- `setup` step can be made to prepare the test environment to run specific use case
  - export ENV variable
  - load library eg. bats-support and bats-assert that provide error reporting, test assertions etc.
  - ...
- `teardown` step can be used to clean up things eg. created files
