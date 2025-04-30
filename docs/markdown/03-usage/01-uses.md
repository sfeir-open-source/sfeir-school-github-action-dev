<!-- .slide: -->

# Uses

## Your action can be used

* As a public action
* As a public action in a subdirectory
* As an action in the same repository as the workflow
* As an action inside a different private repository than the workflow

[reference](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsuses)
<!-- .element: class="credits" -->

Notes:

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Uses

## Workflow Example

```yaml [7-8|10-12|14-16|18-25]
name: Run Actions
on: push
jobs:
  runs-actions:
    runs-on: ubuntu-latest
    steps:
      # Public action
      - uses: rlespinasse/github-slug-action@v4

      # Remote action in a subdirectory
      - uses: sfeir-open-source/sfeir-school-github-action-dev/.github/actions/runs-using-node@main
      - uses: sfeir-open-source/sfeir-school-github-action-dev/.github/actions/runs-using-docker@main

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

[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/syntax.yaml)
<!-- .element: class="credits" -->

Notes:

##==##

<!-- .slide: class="with-code-bg-dark" -->

# Uses

## From most to least prefered Action reference

```yaml [7-8|9-10|11-12|13-14]
name: Run Actions
on: push
jobs:
  runs-actions:
    runs-on: ubuntu-latest
    steps:
      # Reference a specific commit
      - uses: actions/checkout@a81bbbf8298c0fa03ea29cdc473d45769f953675
      # Reference the major version of a release
      - uses: actions/checkout@v3
      # Reference a specific version
      - uses: actions/checkout@v3.2.0
      # Reference a branch
      - uses: actions/checkout@main
```

Notes:
