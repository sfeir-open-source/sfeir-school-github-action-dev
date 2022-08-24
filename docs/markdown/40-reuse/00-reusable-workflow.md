<!-- .slide: -->

# Reusable Workflows

The same thinking can be apply when creating reusable workflows.
We are creating them to extract orchestration patterns to be usable to others like we extract tasks to be usable to others when creating actions.

The only type of action comparable to reusable workflows is the **composite** one.
What the difference between them?

##--##

<!-- .slide: class="with-code" -->

# Reusable Workflows

## Example Workflow

```yaml
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

##--##

<!-- .slide: class="with-code" -->

# Reusable Workflows

## Example Action

```yaml
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
    value: ${{ jobs.workflow_job.outputs.job_output }}
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

##--##

# TODO Reusable Workflows

- Caller rules
  - a reusable workflow can be called from a reusable workflow
  - a reusable workflow can't be called from a composite action
- Secrets are treated as inputs on composite action
- Environment variable from the caller workflow can't be access from the reusable workflow
- Inputs have type only on reusable workflow
- Composite action act as one step in the caller workflow
- Reusable workflow act as sub-step in the caller workflow
- Composite action need action.yaml
- Reusable workflow is store inside one file and can have multiple jobs
