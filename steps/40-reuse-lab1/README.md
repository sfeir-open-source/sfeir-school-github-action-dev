# Lab 1

update the `testing-workflow.yml` file to bo more maintanable and easier to understand.
This lab work with `pull_request`

## Tips

- [reusable_workflow](https://docs.github.com/en/actions/using-workflows/reusing-workflows)
- [composite_action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action)
- [matrix](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs)

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the action
- copy every directory and file from `docs\markdown`
- update the workflow to use a **reusable workflow**
    - use a reusable workflow to replace each step
        - this job take as input the target directory 
    - use a **strategie matrix** that will be use as input of the reusable workflow 
    - update the reusable workflow
        - extract the linter part (install and usage) into a composite action

