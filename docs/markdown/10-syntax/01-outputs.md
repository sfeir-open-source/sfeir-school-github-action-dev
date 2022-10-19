<!-- .slide: class="with-code-bg-dark" -->

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

Speaker **Thibauld**

##--##

<!-- .slide: class="with-code-bg-dark" -->

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

To define an output value, you need to `echo` a key=value into the variable  `$GITHUB_OUTPUT`.

**main.sh**

```sh
echo "<output name>=<value>" >> $GITHUB_OUTPUT
```

Notes:

Speaker **Thibauld**

##--##

<!-- .slide: class="with-code-bg-dark" -->

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
    run: echo "someOutput=Some Value" >> $GITHUB_OUTPUT
    shell: bash
```

To define an output value, a step need to `echo` your key=value output into `$GITHUB_OUTPUT`.

Notes:

Speaker **Thibauld**
