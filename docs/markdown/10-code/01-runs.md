<!-- .slide: -->

# Runs

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-javascript-actions)

### JavaScript-based action

```yaml
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

# Runs

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions)

### Dockerfile-based action

```yaml
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

`env` and `args` value are available on

- pre-entrypoint
- entrypoint
- post-entrypoint

##--##

# Runs

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)

### Composite action

```yaml
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

| Actions          | Limitations                                                                                                  |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| JavaScript       | pre/post **not** available on local actions                                                                  |
| Docker container | \*entrypoint **not** available on local actions                                                              |
| Docker container | can't use condition to run or not the pre and post entrypoint                                                |
| Composite        | No pre or post feature, need to be implemented as step                                                       |
| Composite        | the pre/post-like step will be executed during the action execution, not before or  after  any other actions |
