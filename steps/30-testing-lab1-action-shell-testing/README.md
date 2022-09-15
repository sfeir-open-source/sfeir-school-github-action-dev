# Lab 1

Test shell script using bats in a GitHub Action

## Tips

- Github Action syntax for [Runs](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action) composite action
- bats [manual page](https://bats-core.readthedocs.io/en/stable/writing-tests.html#libraries-and-add-ons)

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the content of our action
- Setup content of our action
  - Add the required step to launch bats test
  - use the `test.bats` file
    - modify the `...` with the path of your Github workflow eg. `PATH="$DIR/../.github/actions/runs-using-docker:$PATH"`
    - add a test that check if addition.sh is working : 5 + 5 eq 10
    - add a test that check if addition.sh is working : missing arg throw an error
    - add a test that check if addition.sh is working : returned exit code is `3`
    - add a test that check if hello-world.sh print at least `Hello` and not `Hola`
    - add a test that check if palindrome.sh is not error with the word `kayak` and the output contains : `is a palindrome` 
    - add a test that check if palindrome.sh end with the word `palindrome` with a regex