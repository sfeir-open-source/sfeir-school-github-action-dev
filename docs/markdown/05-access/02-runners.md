<!-- .slide: -->

# Runners

To run GitHub Actions workflows, GitHub have a [serie of shared runners](https://github.com/actions/runner-images) availables

- Linux
  - ubuntu-lastest
  - ubuntu-xx.yy
- Windows
  - windows-lastest
  - windows-yyyy
- MacOs
  - macos-lastest
  - macos-xx

Notes:


##==##

# Runners

## Pre-install softwares

See runner pre-install softwares to have an idea of what you can use in your actions.

- [ubuntu-lastest](https://github.com/actions/runner-images/blob/main/images/ubuntu/Ubuntu2404-Readme.md)
- [windows-lastest](https://github.com/actions/runner-images/blob/main/images/windows/Windows2025-Readme.md)
- [macos-lastest](https://github.com/actions/runner-images/blob/main/images/macos/macos-15-arm64-Readme.md)

Your action must take in account the environment upon which it can run.

⚠️ The used runner can also be a **custom one**.

Notes:


##==##

# Runners

## Limitations

| Actions          | Limitations                                                             |
| ---------------- |-------------------------------------------------------------------------|
| JavaScript       | Run on Node **20**.                                               |
| Docker container | Run only on **Linux**.                                                  |
| Composite        | Use shell **bash** (or **python**) to have the same behavior across OS. |

[Available Shells](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell)
<!-- .element: class="credits" -->

Notes:

