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

⚠️ Avoid using contexts directly, sometimes it's better to ask the data as input with a default value from the context itself.

[**Contexts Reference** 🔗](https://docs.github.com/en/actions/learn-github-actions/contexts)
<!-- .element: class="credits" -->

Notes:

Some contexts are inaccessibles inside an action

- jobs
- needs
- secrets

##--##

<!-- .slide: class="with-code" -->

# Contexts

## Use as input

```yaml
inputs:
  sha:
    description: Reference to the commit
    required: true
    default: "${{ github.sha }}"
```

##--##

<!-- .slide: class="with-code" -->

# Contexts

## Security

In order to improve [**security** 🔗](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections) and to enable customisation from your user, you must only use the contexts throught action input (as defaut value)

⚠️ Risky practice

```yaml
- uses: you/action-at-risk@v1 # which use 'github.event.pull_request.title' directly
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
- uses: you/action-at-peace@v1
  with:
    title: 'some title'
# Or
- uses: you/action-at-peace@v1 # Input with default value to ${{ github.event.pull_request.title }}
```
