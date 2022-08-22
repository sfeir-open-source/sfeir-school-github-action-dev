<!-- .slide: -->

# Minimal Setup

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

### JavaScript-based action

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'node16'
  main: 'dist/main.js'
```

## **main.js**

```js
console.log(`Doing stuff...`);
```

ℹ️ Use the library [@actions/toolkit 🔗](https://github.com/actions/toolkit) to develop your action.

##--##

# Minimal Setup

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

### Dockerfile-based action

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'docker'
  image: 'Dockerfile'
```

## **Dockerfile**

```Dockefile
FROM debian
ADD main.sh /usr/local/bin/main.sh
```

## **main.sh**

```bash
#!/usr/bin/env sh
echo "Doing stuff..."
```

[**Dockefile support reference** 🔗](https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions#entrypoint)

##--##

# Minimal Setup

## **action.yaml** (or **action.yml**) 👉 [**Go to reference** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)

### Composite action

```yaml
name: Action name
description: Short description of the action
runs:
  using: 'composite'
  steps:
  - run: echo "Doing stuff..."
    shell: bash
```
