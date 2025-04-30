<!-- .slide: -->

# GitHub API

From your action, you can interact with the GitHub API using

- The [@actions/github](https://github.com/actions/toolkit) package from `@actions/toolkit`
  - Expose the official [GitHub Oktokit library](https://octokit.github.io/rest.js/v18) in JavaScript
- Any other [GitHub Oktokit libraries](https://docs.github.com/en/rest/overview/libraries)

Notes:

##==##

<!-- .slide: class="with-code-bg-dark" -->

# GitHub API

## Oktokit

With this library, you can manipulate the GitHub API like

- Add comment to an issue

```yaml [9|12-17]
on:
  issues:
    types: [opened]

jobs:
  comment:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: '👋 Thanks for reporting!'
            })
```

Notes:

##==##

<!-- .slide: class="with-code-bg-dark" -->

# GitHub API

## Oktokit

With this library, you can manipulate the GitHub API like

- Apply a label to an issue

```yaml [9|12-17]
on:
  issues:
    types: [opened]

jobs:
  apply-label:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.addLabels({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              labels: ['Triage']
            })
```

Notes:
