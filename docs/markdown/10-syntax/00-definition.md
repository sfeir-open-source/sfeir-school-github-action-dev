<!-- .slide: -->

# GitHub Action

![float-left](./assets/images/github-action.png)

>An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.
>
>You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.

[Definition](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#actions)
<!-- .element: class="credits" -->

Notes:

Speaker **Romain**

##--##

<!-- .slide: class="with-code-bg-dark" -->

# GitHub Actions Workflow

## Where are the actions?

```yaml [1-38|7-8|9-13|16-19|7-8,9-13,16-19]
name: 'Link Checker: All English'
on: push
jobs:
  check-links:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16.13.x
          cache: npm
      - name: Install
        run: npm ci
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
      - name: Show files changed
        run: cat $HOME/files.json
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```

Notes:

Speaker **Romain**

##--##

<!-- .slide: -->

# What kind of actions?

- Transform existing files
  - Update documentation
  - Generate complied files
- Expose new environment variables
- Setup toolchain into the workspace
  - packages
  - application
  - cli
- Analyse existing files
  - Code coverage
  - Security scan
- **your pick**
<!-- .element: class="list-fragment" -->

Notes:

Speaker **Romain**

##--##

# Type of actions

- JavaScript actions ([template JS](https://github.com/actions/javascript-action), [template TS](https://github.com/actions/typescript-action))
- Docker container actions ([template](https://github.com/actions/container-action))
- Composite actions

Each one have specificities and limitations. We will see them during this training.

Notes:

Speaker **Romain**
