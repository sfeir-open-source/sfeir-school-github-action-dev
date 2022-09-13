<!-- .slide: class="with-code" -->

# Marketplace setup

**action.yaml** (or **action.yml**) 👉 [Go to reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#branding)

```yaml
name: Action name                               # Must be unique on Marketplace
description: Short description of the action    # Used on the marketplace
branding:                                       # Mandatory to be plublish on the Marketplace
  icon: 'award'  
  color: 'green'
```

The action will be available on [GitHub Marketplace](https://github.com/marketplace?type=actions)

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

##--##

# Publish a release to the Marketplace

You can create the GitHub release automatically, but this will not publish it on the marketplace.

![center](./assets/images/lifecycle-marketplace.png)

⚠️ This step is currently only manual.
<!-- .element: class="credits" -->

##--##

# Usage

You are curious by nature, and when to know if anybody already use your Action

For that GitHub expose a the repositories which use your action

> **Insights** > **Dependency graph** > **Dependents**

- [actions/checkout](https://github.com/actions/checkout/network/dependents?package_id=UGFja2FnZS0yOTQwNzE5ODM0)
- [rlespinasse/github-slug-action](https://github.com/rlespinasse/github-slug-action/network/dependents)
- [rlespinasse/drawio-export-action](https://github.com/rlespinasse/drawio-export-action/network/dependents)

⚠️ Only for public actions
<!-- .element: class="credits" -->
