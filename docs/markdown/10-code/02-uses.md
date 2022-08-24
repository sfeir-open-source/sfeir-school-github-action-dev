<!-- .slide: -->

# Uses

## Your action can be used

* As a public action
* As a public action in a subdirectory
* As an action in the same repository as the workflow
* As an action inside a different private repository than the workflow

[**Reference** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses)

##--##

<!-- .slide: class="with-code" -->

# Uses

## Workflow Example

```yaml
name: Run Actions
on: push
jobs:
  runs-actions:
    runs-on: ubuntu-latest
    steps:
      # Public action
      - uses: rlespinasse/github-slug-action@v4

      # Remote action in a subdirectory
      - uses: sfeir-open-source/sfeir-school-github-action-dev/.github/actions/runs-using-node@v1
      - uses: sfeir-open-source/sfeir-school-github-action-dev/.github/actions/runs-using-docker@v1

      # Local action
      - uses: actions/checkout@v3 # Need to be checkout first
      - uses: ./.github/actions/runs-using-composite

      # Private action (as exemple)
      - name: actions/checkout@v3
        with:
          repository: you/my-private-repo
          ref: v1.0.0
          token: ${{ secrets.PERSONAL_ACCESS_TOKEN }}
          path: ./.github/actions/my-private-repo
      - uses: ./.github/actions/my-private-repo/my-action
```
