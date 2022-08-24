<!-- .slide: class="with-code" -->

# Minimal Setup

## JavaScript-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'node16'
  main: 'dist/main.js'
```

**main.js**

```js
console.log(`Doing stuff...`);
```

ℹ️ Use the library [@actions/toolkit 🔗](https://github.com/actions/toolkit) to develop your action.

##--##

<!-- .slide: class="with-code" -->

# Minimal Setup

## Dockerfile-based action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'
```

[**Dockerfile** 🔗](https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions)

```Dockefile
FROM debian
ADD main.sh /usr/local/bin/main.sh
```

**main.sh**

```bash
#!/usr/bin/env sh
echo "Doing stuff..."
```

##--##

<!-- .slide: class="with-code" -->

# Minimal Setup

## Composite action

**action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
  - run: echo "Doing stuff..."
    shell: bash
```
