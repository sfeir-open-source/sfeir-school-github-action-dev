<!-- .slide: class="with-code-bg-dark" -->

# Testing Shell script with Bats

Setup your repository by adding **bats** and utilities as submodules

- `test/bats` - [reference](https://github.com/bats-core/bats-core.git)
- `test/test_helper/bats-support` - [reference](https://github.com/bats-core/bats-support.git)
- `test/test_helper/bats-assert` - [reference](https://github.com/bats-core/bats-assert.git)

```text [1-5|8,10-11|12]
action.yaml
src/
    cleanup.sh
    main.sh
    setup.sh
    ...
test/
    bats/               <- as git submodule
    test_helper/
        bats-support/   <- as git submodule
        bats-assert/    <- as git submodule
    test.bats
    ...
```

Notes:

Easy way to use TDD method during development

Notes:

Speaker **Thibauld**
