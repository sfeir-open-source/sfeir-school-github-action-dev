<!-- .slide: -->

# Actions toolkit

GitHub provides a set of packages to make creating actions easier with [@actions/toolkit](https://github.com/actions/toolkit).

It can be used by any action type

- Directly in JavaScript action
- Using node-based dockerfile in Docker action
- Using [github-script](https://github.com/actions/github-script) for Composite action

##--##

# Actions toolkit

## Some packages

| Package                 | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| **@actions/exec**       | Provides functions to exec cli tools and process output.                                       |
| **@actions/glob**       | Provides functions to search for files matching glob patterns.                                 |
| **@actions/io**         | Provides disk i/o functions like cp, mv, rmRF, which etc.                                      |
| **@actions/tool-cache** | Provides functions for downloading and caching tools. e.g. setup-* actions.                    |
| **@actions/artifact**   | Provides functions to interact with actions artifacts.                                         |
| **@actions/cache**      | Provides functions to cache dependencies and build outputs to improve workflow execution time. |
