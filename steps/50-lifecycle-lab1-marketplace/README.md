# Lab 1

Create a new repository and **release it**, then **publish it** to the marketplace.

## Tips

- Semantic Release [exec plugin](https://github.com/semantic-release/exec)
- GitHub Action workflow syntax : [needs](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds)
- [Publishing to the marketplace](https://docs.github.com/en/actions/creating-actions/publishing-actions-in-github-marketplace)

## Steps

- Create a repository
- Add the file `release-workflow.yml` which will serve you to run the lab
- Add minimal JS action `action.yaml` and `index.js` files

### Release it

- Create a second job `release` which needs the `testing` job to be successful
- Run the `semantic release` throught its action on repository sources

### Publish it

- Add required syntax to the `action.yaml` file to publish on the Marketplace
- Edit latest release to publish it
  - Fix any marketplace publication errors
  - Choose one or two categories as you want (not relevant to this lab)
- Search for your action on the Marketplace

### Test it

Create a new workflow `testing-workflow.yaml` to test your action from an user point of view
  
  ```yaml
  name: Testing your public action
  on: push
  jobs:
    testing:
      runs-on: ubuntu-latest
      steps:
        - uses: you/your-action@v1.x.x
  ```
  
⚠️ Do not forget to `unpublish` this action at the end of the Lab.
