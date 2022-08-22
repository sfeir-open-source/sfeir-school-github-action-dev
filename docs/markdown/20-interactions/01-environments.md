<!-- .slide: -->

# Virtual Environments

## Runners

To run GitHub Actions workflows, GitHub have a [**serie of runners** 🔗](https://github.com/actions/runner-images) availables

- Linux
  - ubuntu-lastest
  - ubuntu-xx.yy
- Windows
  - windows-lastest
  - windows-yyyy
- MacOs
  - macos-lastest
  - macos-xx

##--##

# Virtual Environments

## Pre-install softwares

See runner pre-install softwares to have an idea of what you can use in your actions.

- [**ubuntu-lastest** 🔗](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
- [**windows-lastest** 🔗](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
- [**macos-lastest** 🔗](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)

Your action must take in account the environment upon which its can run.

⚠️ The runner can also be a **custom one**.

##--##

# Virtual Environments

## Limitations

| Actions          | Limitations                                            |
| ---------------- | ------------------------------------------------------ |
| JavaScript       | run on Node **12 or 16**                               |
| Docker container | run only on **Linux**                                  |
| Composite        | use shell **bash** to have the same behavior across OS |

[**Available Shells** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell)
