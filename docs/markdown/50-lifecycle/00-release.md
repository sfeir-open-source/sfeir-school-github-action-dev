<!-- .slide: -->

# Release of an action

Once your action is created, we recommand you to start de release cycle to better manage bugfixes or new features.
Without it, the use of your action will only be throught branches.

Release cycle

- Use Semantic Versionning : [**MAJOR.MINOR.PATCH** 🔗](https://semver.org/spec/v2.0.0.html#summary)
  - Use the [**v* prefix** 🔗](https://semver.org/spec/v2.0.0.html#is-v123-a-semantic-version) for your git tag (`v1.0.1` instead of `1.0.1`)
- Keep a [**git tag based on MAJOR version** 🔗](https://docs.github.com/en/actions/creating-actions/releasing-and-maintaining-actions#example-developer-process) up-to-date
  - You can also do the same for **MINOR** version
- Keep maximum 2 major versions in parallel to ease the maintenance
<!-- .element: class="list-fragment" -->

##--##

## 2 major versions maximum

As you keep a maximum of 2 major versions up-to-date, you need to document it.

This fall on the **Security** part (Advisories, Vulnerabilities Alerts) of your repository.

See [**Security Policy** 🔗](https://github.com/rlespinasse/github-slug-action/blob/v4.x/SECURITY.md) example

- Tell when the branch **will not be maintained anymore for security issues**
- Tell when the branch **will be deleted forever**

⚠️ This kind of documentation is important since a branch reference can be used to run an Action.
⚠️ Avoid classic branch naming `master` or `main`

##--##

<!-- .slide: class="with-code" -->

## Semantic Release

You can manage semantic versionning by a lot of tools or manually,
we recommand you [**Semantic Release** 🔗](https://github.com/semantic-release/semantic-release) toolchain which come with an Action.

**.releaserc**

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```

**release-workflow.yaml**

```yaml
- name: Checkout sources
  uses: actions/checkout@v3
- name: Semantic Release
  uses: cycjimmy/semantic-release-action@v3
  with:
    extra_plugins: |
      @semantic-release/changelog
      @semantic-release/git
```

A wrapper around that : [**rlespinasse/release-that** 🔗](https://github.com/rlespinasse/release-that)
<!-- .element: class="credits" -->

##--##

<!-- .slide: class="with-code" -->

## JavaScript action

Since this kind of action generate dist files, we need to take the produced files in account during the release

**.releaserc**

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {"prepareCmd": "git add dist"}],
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```

**release-workflow.yaml**

```yaml
- uses: actions/checkout@v3
- run: npm run build
- uses: cycjimmy/semantic-release-action@v3
  with:
    extra_plugins: |
      @semantic-release/changelog
      @semantic-release/exec
      @semantic-release/git
```
