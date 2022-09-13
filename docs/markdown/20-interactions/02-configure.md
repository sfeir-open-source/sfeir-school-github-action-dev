<!-- .slide: class="with-code" -->

# Configure

## [Set an environment variable](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable)

In shell

```bash
echo '{environment_variable_name}={value}' >> $GITHUB_ENV
```

In JavaScript

```js
const core = require('@actions/core');
core.exportVariable('{environment_variable_name}', '{value}');
```

##--##

<!-- .slide: class="with-code" -->

# Configure

## [Set a multiline environment variable](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#multiline-strings)

In shell

```bash
echo '{environment_variable_name}<<EOF' >> $GITHUB_ENV
your-command-that-generate-multiline-output >> $GITHUB_ENV
echo '<<EOF' >> $GITHUB_ENV
```

In JavaScript

```js
const core = require('@actions/core');
core.exportVariable('{environment_variable_name}', var_with_multiline_content);
```

##--##

<!-- .slide: class="with-code" -->

# Configure

## [Add a directory to the path](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#adding-a-system-path)

In shell

```bash
echo "{path}" >> $GITHUB_PATH
```

In JavaScript

```js
const core = require('@actions/core');
core.addPath('{path}');
```

##--##

# Configure

## Other configuration

- Sending values to the pre and post actions ([Reference](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#sending-values-to-the-pre-and-post-actions))
- Stopping and starting workflow commands ([Reference](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#stopping-and-starting-workflow-commands))
- Masking a value in log ([Reference](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-log))
- Echoing command outputs ([Reference](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#echoing-command-outputs))
