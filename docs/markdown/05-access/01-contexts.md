<!-- .slide: -->

# Contexts

Your action will be run inside a workflow and having access to its contexts.

- `inputs.*`
- `env.*`
- `github.*`
- `job.*`
- `runner.*`
- `strategy.*` and `matrix.*` (Only if a matrix strategy is used in the caller job)
- `steps.*` (Only for `composite` actions)
- `secrets.*` (Except for `composite` actions)
<!-- .element: class="list-fragment" -->

[Contexts Reference](https://docs.github.com/en/actions/learn-github-actions/contexts)
/
[Code in action](https://github.com/sfeir-open-source/sfeir-school-github-action-dev/blob/main/.github/workflows/interactions.yaml)
<!-- .element: class="credits" -->

Notes:

Some contexts are inaccessibles inside an action

- jobs
- needs
- secrets (for Composite actions)

##==##

<!-- .slide: class="with-code" -->

# Contexts

## Access it using input

⚠️ Avoid using contexts directly, sometimes it's better to ask the data as input with a default value from the context itself.

```yaml [5]
inputs:
  sha:
    description: Reference to the commit
    required: true
    default: "${{ github.sha }}"
```

Notes:


##==##

<!-- .slide: class="with-code" -->

# Contexts

## Security

In order to improve [security](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections) and to enable customisation from your user, you must only use the contexts throught action input (as defaut value).

⚠️ Risky practice

```yaml
- uses: you/action-at-risk@main # which use 'github.event.pull_request.title' directly
```

👍 Preferred practice

```yaml
inputs:
  title:
    description: Title
    required: true
    default: "${{ github.event.pull_request.title }}"
```

```yaml
- uses: you/action-at-peace@main
  with:
    title: 'some title'
# Or
- uses: you/action-at-peace@main # Input with default value to ${{ github.event.pull_request.title }}
```

Notes:

