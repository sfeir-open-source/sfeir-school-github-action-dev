<!-- .slide: -->

# GitHub Action

![float-left](./assets/images/github-action.png)

>An action is a custom application for the GitHub Actions platform that performs a complex but frequently repeated task. Use an action to help reduce the amount of repetitive code that you write in your workflow files. An action can pull your git repository from GitHub, set up the correct toolchain for your build environment, or set up the authentication to your cloud provider.
>
>You can write your own actions, or you can find actions to use in your workflows in the GitHub Marketplace.

[**Definition** 🔗](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#actions)
<!-- .element: class="credits" -->

##--##

# What kind of actions?

- Transform the existing file
  - Update documentation
  - Generate complied files
- Expose new environment variables
- Setup packages/application into the workspace
- Analyse existing files
  - Code coverage
  - Security scan
- ...
<!-- .element: class="list-fragment" -->

##--##

# Type of actions

- JavaScript actions ([**template JS** 🔗](https://github.com/actions/javascript-action), [**template TS** 🔗](https://github.com/actions/typescript-action))
- Docker container actions ([**template** 🔗](https://github.com/actions/container-action))
- Composite actions

Each one have specificities and limitations. We will see them during this training.
