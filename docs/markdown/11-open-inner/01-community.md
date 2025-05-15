<!-- .slide: -->

# Community

GitHub provides you some recommandations and help to improve the community side of your project : [https://github.com/you/your-action/community](https://github.com/rlespinasse/github-slug-action/community).

Not mandatory but recommanded :

|                                        | Tell                                                                           |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| README                                 | ... about your project, what it does, what is it useful, and how to use it.    |
| [License](https://choosealicense.com/) | ... how to use and interact with the code from legal point of view.            |
| Description                            | ... succinctly about your project (same as for action.yaml description field). |
| Code of Conduct                        | ... your community what is or not acceptable to do during social interactions. |
| Contributing                           | ... newcomers how to contribute to this repository.                            |


Notes:

##==##

## Rule of 2 major versions maximum

As you keep a maximum of 2 major versions up-to-date, you need to document it.

This fall on the **Security** part (Advisories, Vulnerabilities Alerts) of your repository.

See [Security Policy](https://github.com/rlespinasse/github-slug-action/blob/v4.x/SECURITY.md) example : 

- Tell when the branch **will not be maintained anymore for security issues**
- Tell when the branch **will be deleted forever**

⚠️ This kind of documentation is important since a branch reference can be used to run an Action.

⚠️ Avoid classic branch naming `master` or `main`.

Notes:
