<!-- .slide: -->

# GitHub API

From your action, you can interact with the GitHub API using

- The [**@actions/github** 🔗](https://github.com/actions/toolkit) package from `@actions/toolkit`
  - expose the official [**GitHub Oktokit library** 🔗](https://octokit.github.io/rest.js/v18) in JavaScript
- Any other [**GitHub Oktokit libraries** 🔗](https://docs.github.com/en/rest/overview/libraries)

##--##

# GitHub API

## Oktokit

With this library, you can manipulate the GitHub API like

- welcoming a new contributor

```yaml
- uses: actions/github-script@v6
  with:
    script: |
      const creator = context.payload.sender.login
      const opts = github.rest.issues.listForRepo.endpoint.merge({
        ...context.issue,
        creator,
        state: 'all'
      })
      const issues = await github.paginate(opts)
      for (const issue of issues) {
        if (issue.number === context.issue.number) {
          continue
        }
        if (issue.pull_request) {
          return // Creator is already a contributor.
        }
      }
      await github.rest.issues.createComment({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        body: `**Welcome**, new contributor!
          Please make sure you're read our [contributing guide](CONTRIBUTING.md) and we look forward to reviewing your Pull request shortly ✨`
      })
```

##--##

# GitHub API

## Oktokit

With this library, you can manipulate the GitHub API like

- add a label `Triage` on new issue

```yaml
- uses: actions/github-script@v6
  with:
    script: |
      github.rest.issues.addLabels({
        issue_number: context.issue.number,
        owner: context.repo.owner,
        repo: context.repo.repo,
        labels: ['Triage']
      })
```
