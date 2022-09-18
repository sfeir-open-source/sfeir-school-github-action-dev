# Lab 1

Create a Composite Action to output the input text as **Uppercase** value

## Tips

- Github Action syntax for [**outputs** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#outputs-for-composite-actions) in Composite action
- Shell Parameter expansion [**documentation** 🔗](https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html)
- Use `env` to pass inputs into `runs` command
  
  ```yaml
  env:
    INPUT_VALUE: ${{ inputs.value }}
  ```

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the action
- Use the file `action.yml` and
  - Set the uppercase value as output of the step `upper_step`
  - Add as action output the uppercase value from the step `upper_step`
