<!-- .slide: class="with-code" -->

# Minimal Setup

## JavaScript-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'node20'
  main: 'main.js'
```

**main.js**

```js
console.log(`Doing stuff...`);
```

ℹ️ Use the library [@actions/toolkit](https://github.com/actions/toolkit) to develop your action.

Notes:

##==##

<!-- .slide: class="with-code" -->

# Minimal Setup

## Dockerfile-based action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'
```

**Dockerfile**

```Dockefile
FROM debian
ADD main.sh /usr/local/bin/main.sh
```

**main.sh**

```bash
#!/usr/bin/env sh
echo "Doing stuff..."
```

[Dockerfile support for GitHub Action](https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions)
<!-- .element: class="credits" -->

Notes:

##==##

<!-- .slide: class="with-code" -->

# Minimal Setup

## Composite action

**action.yaml** (or **action.yml**) - [reference](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
  - run: echo "Doing stuff..."
    shell: bash
```

Notes:
