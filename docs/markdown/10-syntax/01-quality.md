<!-- .slide: class="with-code-bg-dark" -->

# Quality

> How can we always provide quality on a Github action ?

Notes:

Speaker **Someone**

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Quality

## Lint tool

[Action lint](https://rhysd.github.io/actionlint/) is a open source linter for Github Action.

- Syntax  
- Strong type check for `${{ }}` expressions
- Actions usage check
- Reusable workflow check
- shellcheck and pyflakes
- Security checks
- ...
<!-- .element: class="list-fragment" -->

Notes:

- check unexpected or missing keys following workflow syntax
- catch several semantic errors like access to not existing property, type mismatches, ...
- check that inputs at with: and outputs in steps.{id}.outputs are correct
- inputs/outputs/secrets of reusable workflows and workflow calls
- shellcheck and pyflakes integrations for scripts at run:
- script injection by untrusted inputs, hard-coded credentials
- glob syntax validation, dependencies check for `needs:`, runner label validation, cron syntax validation, ...

Speaker **Someone**

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Quality

## Lint tool - Usage 

```yaml [9-12|13-15]
name: Lint GitHub Actions workflows
on: [push, pull_request]

jobs:
  actionlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Download actionlint
        id: get_actionlint
        run: bash <(curl https://raw.githubusercontent.com/rhysd/actionlint/main/scripts/download-actionlint.bash)
        shell: bash
      - name: Check workflow files
        run: ${{ steps.get_actionlint.outputs.executable }} -color
        shell: bash
```

Notes:

Speaker **Someone**

##--##

<!-- .slide: class="with-code-bg-dark" -->

# Quality

## Lint tool - Customize

- Make a commentary for each pull request
- Change the format to markdown with `-format` option 
- Ignore false positive with `-ignore` option 
- Manage exit status 
- ...
<!-- .element: class="list-fragment" -->

Notes:

Speaker **Someone**