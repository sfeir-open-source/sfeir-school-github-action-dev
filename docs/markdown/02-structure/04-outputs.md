<!-- .slide: class="with-code" -->

# Outputs

## JavaScript-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

```yaml [3-5]
name: Action name
description: Short description of the action
outputs:
  someOutput:
    description: "Some Output"
runs:
  using: 'node16'
  main: 'dist/main.js'
```

**main.js**

```js [2]
const core = require('@actions/core');
core.setOutput('someOutput', 'Some Value');
```

Notes:

##==##

<!-- .slide: class="with-code" -->

# Outputs

## Dockerfile-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

```yaml [3-5]
name: Action name
description: Short description of the action
outputs:
  someOutput:
    description: "Some Output"
runs:
  using: 'docker'
  image: 'Dockerfile'
```

To define an output value, you can use the [GITHUB_OUTPUT](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) environment file.

**main.sh**

```sh
echo "someOutput=Some Value" >> $GITHUB_ENV
```

Notes:

##==##

<!-- .slide: class="with-code" -->

# Outputs

## Composite action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)

```yaml [10-11|3-6]
name: Action name
description: Short description of the action
outputs:
  someOutput:
    description: "Some Output"
    value: ${{ steps.some-output-step.outputs.someOutput }}
runs:
  using: 'composite'
  steps:
  - id: some-output-step
    run: echo "someOutput=Some Value" >> $GITHUB_ENV
    shell: bash
```

To define an output value, a step need to use the [GITHUB_OUTPUT](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter) environment file and then map it as value of the output of the action.

Notes:
