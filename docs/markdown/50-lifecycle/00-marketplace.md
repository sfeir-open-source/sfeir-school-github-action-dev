<!-- .slide: class="with-code-bg-dark" -->

# Marketplace setup

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding)

```yaml [1|2|3-5]
name: Action name                               # Must be unique on Marketplace
description: Short description of the action    # Used on the marketplace
branding:                                       # Mandatory to be publish on the Marketplace
  icon: 'award'
  color: 'green'
```

The action will be available on [GitHub Marketplace](https://github.com/marketplace?type=actions).

Notes:

Speaker **Thibauld**

##--##

# README file

For an action, the README file will be used as marketplace page.

GitHub recommand to [have a README file containing](https://docs.github.com/en/actions/creating-actions/about-custom-actions#creating-a-readme-file-for-your-action)

- A detailed description of what the action does
- Required input and output arguments
- Optional input and output arguments
- Secrets the action uses
- Environment variables the action uses
- An example of how to use your action in a workflow
<!-- .element: class="list-fragment" -->

Notes:

Speaker **Thibauld**

##--##

# Publish a release to the Marketplace

You can create the GitHub release automatically, but the publication to the marketplace is **not**.

![center](./assets/images/lifecycle-marketplace.png)

⚠️ This step is currently only manual.
<!-- .element: class="credits" -->

Notes:

Speaker **Thibauld**
