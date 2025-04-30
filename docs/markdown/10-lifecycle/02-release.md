<!-- .slide: -->

# Release of an action

Once your action is created, we recommand you to **start a release cycle** to better manage new features or bugfixes.
Without it, the use of your action will only be throught branches.

## Release cycle practices

- Use Semantic Versionning : [MAJOR.MINOR.PATCH](https://semver.org/spec/v2.0.0.html#summary)
  - Use the [v* prefix](https://semver.org/spec/v2.0.0.html#is-v123-a-semantic-version) for your git tag (`v1.0.1` instead of `1.0.1`)
- Keep a git tag [based on MAJOR version](https://docs.github.com/en/actions/creating-actions/releasing-and-maintaining-actions#example-developer-process) up-to-date
  - You can also do the same for **MINOR** version
- Keep maximum 2 major versions in parallel to ease the maintenance
<!-- .element: class="list-fragment" -->

Notes:

##==##

<!-- .slide: class="with-code" -->

## Semantic Release

You can manage semantic versionning by a lot of tools or manually,
we recommand you [Semantic Release](https://github.com/semantic-release/semantic-release) toolchain which come with an Action.

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

Notes:


##==##

<!-- .slide: class="with-code" -->

## Semantic Release

**release-workflow.yaml**

```yaml [3-10]
- name: Checkout sources
  uses: actions/checkout@v4
- name: Semantic Release
  uses: cycjimmy/semantic-release-action@v3
  with:
    extra_plugins: |
      @semantic-release/changelog
      @semantic-release/git
  env:
    GITHUB_TOKEN: ${{ github.token }}
```

A wrapper around that : [rlespinasse/release-that](https://github.com/rlespinasse/release-that)
<!-- .element: class="credits" -->

Notes:


##==##

<!-- .slide: class="with-code" -->

## JavaScript action

When action **generate dist files**, we need to take the produced files in account during the release.

**.releaserc**

```json [6]
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

Notes:


##==##

<!-- .slide: class="with-code" -->

## JavaScript action

**release-workflow.yaml**

```yaml [2-3|8]
- uses: actions/checkout@v4
- run: npm install
- run: npm run prepare
- uses: cycjimmy/semantic-release-action@v3
  with:
    extra_plugins: |
      @semantic-release/changelog
      @semantic-release/exec
      @semantic-release/git
  env:
    GITHUB_TOKEN: ${{ github.token }}
```

Notes:
