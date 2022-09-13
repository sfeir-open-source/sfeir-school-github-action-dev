# Lab 1

Test shell script using bats in a GitHub Action

## Tips

- Github Action syntax for [**Runs** 🔗](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) composite action
- bats [**manual page** 🔗](https://bats-core.readthedocs.io/en/stable/writing-tests.html#libraries-and-add-ons)

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the action
- Use the file `action.yml` and
  - Add the required step to launch bats test
  - Create a test-labs.bats file
  - Create the required tests for each script inside `/scripts`