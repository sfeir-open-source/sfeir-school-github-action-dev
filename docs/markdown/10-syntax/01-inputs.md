<!-- .slide: class="with-code-bg-dark" -->

# Inputs

## JavaScript-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml [3-7]
name: Action name
description: Short description of the action
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
runs:
  using: 'node16'
  main: 'dist/main.js'
```

**main.js**

```js [2]
const core = require('@actions/core');
const value = core.getInput('firstInput');
```

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Inputs

## Dockerfile-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml [3-7]
name: Action name
description: Short description of the action
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
runs:
  using: 'docker'
  image: 'Dockerfile'
```

`firstInput` is available under environment variable `$INPUT_FIRSTINPUT`

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Inputs

## Composite action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputs)

```yaml [3-7|11]
name: Action name
description: Short description of the action
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
runs:
  using: 'composite'
  steps:
  - run: echo "${{ inputs.firstInput }}"
    shell: bash
```

`firstInput` is **NOT** available under environment variable `$INPUT_FIRSTINPUT`

And you need to use the `inputs` context field to access it : `${{ inputs.firstInput }}`.

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Deprecation of an input

During the development of your action, you may want to abandon an input released on a previous version.

[**deprecationMessage**](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#inputsinput_iddeprecationmessage]) help you achieve this before removing it in the next version.

```yaml [9-12|8]
name: Action name
description: Short description of the action
inputs:
  firstInput:
    description: First Input
    required: true
    default: "Default value"
    deprecationMessage: "Use secondInput instead"
  secondInput:
    description: Second Input
    required: true
    default: "Default value"
```
