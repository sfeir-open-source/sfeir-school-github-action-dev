<!-- .slide: class="with-code" -->

# Outputs

## JavaScript-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'node16'
  main: 'dist/main.js'
outputs:
  someOutput:
    description: "Some Output"
```

**main.js**

```js
const core = require('@actions/core');
core.setOutput('someOutput', 'Some Value');
```

##--##

<!-- .slide: class="with-code" -->

# Outputs

## Dockerfile-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-docker-container-and-javascript-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'
outputs:
  someOutput:
    description: "Some Output"
```

To define an output value, you need to print the `set-output` command

```text
::set-output name=someOutput::Some Value
```

##--##

<!-- .slide: class="with-code" -->

# Outputs

## Composite action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
  - id: some-output-step
    run: echo "::set-output name=someOutput::Some Value"
    shell: bash
outputs:
  someOutput:
    description: "Some Output"
    value: ${{ steps.some-output-step.outputs.someOutput }}
```

To define an output value, a step need to print the `set-output` command and you need to map it as value of the output.
