<!-- .slide: class="with-code-bg-dark" -->

# Runs

## JavaScript-based action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions)

```yaml [3-5|7-8|9-10]
name: Action name
description: Short description of the action
runs:
  using: 'node16'                       # or node12
  main: 'main.js'                       # your entrypoint file
  # Optional configurations
  pre: 'setup.js'                       # will not run if used as the action is locally run
  pre-if: runner.os == 'windows'
  post: 'cleanup.js'                    # will not run if used as the action is locally run
  post-if: failure()
```

- The `setup.js` file will run before the `main.js` file only on Windows.
- The `cleanup.js` file will run only if `main.js` file fail to run.

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Runs

## Dockerfile-based action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions)

```yaml [3-5|7-9|10-11|12-14]
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'                 # can also be a existing docker image => docker://debian:stretch
  # Optional configurations
  pre-entrypoint: 'setup.sh'          # will not run if used as the action is locally run
  entrypoint: 'main.sh'
  post-entrypoint: 'cleanup.sh'       # will not run if used as the action is locally run
  env:
    KEY: 'Value'
  args:
    - 'firstArg'
    - 'secondArg'
```

`env` and `args` value are available on `pre-entrypoint`, `entrypoint`, and `post-entrypoint`.

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Runs

## Composite action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)

```yaml [3-5|6-8|9-13|14-17|18-20|21-23]
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
    - run: $GITHUB_ACTION_PATH/setup.sh
      shell: bash
      if: runner.os == 'windows'
    - id: slug-action
      name: Use another action
      uses: rlespinasse/github-slug-action@v4
      with:
        prefix: CI_
    - run: $GITHUB_ACTION_PATH/main.sh
      shell: bash
      env:
        SLUG_REF: $CI_GITHUB_REF_SLUG
    - run: ls
      shell: bash
      working-directory: .
    - run: $GITHUB_ACTION_PATH/cleanup.sh
      shell: bash
      if: failure()
```

The steps are run under `$GITHUB_WORKSPACE` folder same as steps from a workflow.
To access any file in the action, you must use `$GITHUB_ACTION_PATH`.

##--##

# Runs

## Limitations

| Actions          | Limitations                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| JavaScript       | pre/post **not** available on local actions, warning will be log                                           |
| Docker container | \*-entrypoint **not** available on local actions, warning will be log                                      |
| Docker container | can't use condition to run nor the pre and post entrypoint                                                 |
| Composite        | No pre or post features, need to be implemented as step                                                    |
| Composite        | the pre/post-like step will be executed during the action execution, not before or after any other actions |
