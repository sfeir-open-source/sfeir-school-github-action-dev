<!-- .slide: -->

# Action or Reusable Workflow

The **reusable workflows** extract **orchestration patterns** to be used by others workflows.

The **composite actions** extract **orchestration patterns** to be used by workflows or actions.

**What the difference between them?**

Notes:

##==##

<!-- .slide: class="with-code" -->

# Action

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
      uses: some/action@main
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

##==##

<!-- .slide: class="with-code" -->

# or Reusable Workflow

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
        uses: some/action@main
        with:
          action_input1: ${{ inputs.workflow_input }}
          action_input2: ${{ secrets.workflow_secret }}
          env:
            ACTION_ENV: ${{ inputs.workflow_env }}
```

Notes:

Declaration and use of

- Input (type: string, number, boolean)
- Output
- Secret
- Env variable
