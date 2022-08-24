<!-- .slide: -->

# Contexts

Your action will be run inside a workflow and having access to its contexts.

- `github.*`
- `env.*`
- ...
- [**more contexts** 🔗](https://docs.github.com/en/actions/learn-github-actions/contexts)

##--##

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
