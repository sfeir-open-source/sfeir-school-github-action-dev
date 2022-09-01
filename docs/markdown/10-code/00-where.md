<!-- .slide: class="two-column with-code" -->

## GitHub Actions Workflow

### Where are the actions?

```yaml
name: 'Link Checker: All English'
on: push
jobs:
  check-links:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Setup node
        uses: actions/setup-node@v3
        with:
          node-version: 16.13.x
          cache: npm
      - name: Install
        run: npm ci
      - name: Gather files changed
        uses: trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
        with:
          fileOutput: 'json'
      - name: Show files changed
        run: cat $HOME/files.json
      - name: Link check (warnings, changed files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --max 100 \
            --check-anchors \
            --check-images \
            --verbose \
            --list $HOME/files.json
      - name: Link check (critical, all files)
        run: |
          ./script/rendered-content-link-checker.mjs \
            --language en \
            --exit \
            --verbose \
            --check-images \
            --level critical
```

##--##

### Actions

* actions/checkout@v3
* actions/setup-node@v3
* trilom/file-changes-action@a6ca26c14274c33b15e6499323aac178af06ad4b
<!-- .element: class="list-fragment" -->
