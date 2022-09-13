<!-- .slide: -->

# Reusable Workflow or Action

The same thinking can be apply when creating reusable workflows.
We are creating them to extract orchestration patterns to be usable to others like we extract tasks to be usable to others when creating actions.

The only type of action comparable to reusable workflows is the **composite** one.
What the difference between them?

##--##

<!-- .slide: class="with-code" -->

# Reusable Workflow

```yaml [3-7|29|16-18|19,21,23-24,26-27|12-15|30|3,8-11|32]
on:
  workflow_call:
    inputs:
      workflow_input:
        description: 'workflow_input'
        required: true
        type: string
      workflow_env:
        description: 'workflow_env'
        required: true
        type: string
    secrets:
      workflow_secret:
        description: 'workflow_secret'
        required: true
    outputs:
      workflow_output:
        description: 'workflow_output'
        value: ${{ jobs.workflow_job.outputs.job_output }}
jobs:
  workflow_job:
    runs-on: ubuntu-latest
    outputs:
      job_output: ${{ steps.step1.outputs.action_output }}
    steps:
      - id: step1
        uses: some/action@v1
        with:
          action_input1: ${{ inputs.workflow_input }}
          action_input2: ${{ secrets.workflow_secret }}
          env:
            ACTION_ENV: ${{ inputs.workflow_env }}
```

Notes:

Declaration and use of

- Input (type)
- Output
- Secret
- Env variable

##--##

<!-- .slide: class="with-code" -->

# or Action

```yaml [1-4|18|8-10|11,15-16|1,5-7|19|20-21]
inputs:
  action_input:
    description: 'action_input'
    required: true
  action_secret:
    description: 'action_secret'
    required: true
outputs:
  action_output:
    description: 'action_output'
    value: ${{ steps.step1.outputs.action_output }}
runs:
  using: composite
  steps:
    - id: step1
      uses: some/action@v1
      with:
        action_input1: ${{ inputs.action_input }}
        action_input2: ${{ inputs.action_secret }}
      env:
        ACTION_ENV: ${{ env.WORKFLOW_ENV }}
```

Notes:

Declaration and use of

- Input
- Output
- Secret
- Env variable

##--##

# Reusable Workflow or Action

## Syntax

- Secrets are treated as inputs on composite action
- Inputs have type only on reusable workflow
- Job can only use one reusable workflow
<!-- .element: class="list-fragment" -->

##--##

# Reusable Workflow or Action

## Behavior

- Composite action act **as one step** in the caller workflow ![](./assets/images/reuse-job-steps.png)
- Reusable workflow act **as sub-step** in the caller workflow ![](./assets/images/reuse-jobs.png)
<!-- .element: class="list-fragment" -->

##--##

# Reusable Workflow or Action

## Strucuture

- Composite action need the file `action.yaml`
- Reusable workflow is store inside one file and can have multiple jobs
<!-- .element: class="list-fragment" -->

##--##

# Reusable Workflow or Action

- A reusable workflow **CAN** be called from a reusable workflow
- A reusable workflow **CAN'T** be called from a composite action
- An action **CAN** be called from a reusable workflow
- An action **CAN** be called from a composite action
<!-- .element: class="list-fragment" -->
