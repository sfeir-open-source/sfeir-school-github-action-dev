<!-- .slide: -->

# Communicate

## Logging and annotations

Your action can display logs and set annotations using the `message` commands

- [**debug** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-debug-message) (log only when debugging is activated)
- [**notice** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-notice-message)
- [**warning** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-a-warning-message)
- [**error** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-error-message)

##--##
# Communicate

## Logging and annotations

A log will be display directly inside the log message of your action run.

![logs](./assets/images/interations-communicate-logs.png)

An annotation will be attach to the summary of the workflow.

![annotations](./assets/images/interations-communicate-annotations.png)

##--##

# Communicate

## Log debug message

In shell

```bash
echo '::debug::{message}'
```

In JavaScript

```js
const core = require('@actions/core');
core.debug('{message}');
```

##--##

# Communicate

## Setting a message (notice, warning, error)

In shell

```bash
echo '::notice file={name},line={line},endLine={endLine},col={col},endColumn={endColumn},title={title}::{message}'
```

In JavaScript

```js
const core = require('@actions/core');
core.notice('{message}', {
  title: '{title}',
  file: '{name}',
  startColumn: 1, // {col}
  endColumn: 1,   // {endColumn}
  startLine: 1,   // {line}
  endLine: 1      // {endLine}
});
```

On Job Summary

![message file](./assets/images/interactions-communicate-message-file.png)

##--##

# Communicate

## Contribute to the job summary

In shell

```bash
echo "{markdown content}" >> $GITHUB_STEP_SUMMARY
```

In JavaScript

```js
const core = require('@actions/core');
await core.summary
  .addRaw('{markdown content}')
  .write()
```

⚠️ You can't use it more than once in a `composite` action.

##--##

# Communicate

## Other communications

- Grouping log lines ([**Reference** 🔗](https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#grouping-log-lines))
