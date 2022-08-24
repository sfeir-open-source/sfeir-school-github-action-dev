<!-- .slide: class="with-code" -->

# Inputs

## JavaScript-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'node16'
  main: 'dist/main.js'
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
```

**main.js**

```js
const core = require('@actions/core');
const value = core.getInput('firstInput');
```

##--##

<!-- .slide: class="with-code" -->

# Inputs

## Dockerfile-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
```

`firstInput` is available under environment variable `$INPUT_FIRSTINPUT`

##--##

<!-- .slide: class="with-code" -->

# Inputs

## Composite action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
  - run: echo "${{ inputs.firstInput }}"
    shell: bash
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
```

`firstInput` is **NOT** available under environment variable `$INPUT_FIRSTINPUT`

And you need to use the `inputs` context to access it.
