<!-- .slide: class="with-code" -->

# Outputs

## JavaScript-based action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

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

##--##

<!-- .slide: class="with-code" -->

# Outputs

## Dockerfile-based action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

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

To define an output value, you need to print the `set-output` command

**main.sh**

```sh
echo "::set-output name=someOutput::Some Value"
```

##--##

<!-- .slide: class="with-code" -->

# Outputs

## Composite action

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)

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
    run: echo "::set-output name=someOutput::Some Value"
    shell: bash
```

To define an output value, a step need to print the `set-output` command and you need to map it as value of the output.
