<!-- .slide: -->

# Testing Methods

You can unit test your code depending of your language of choice.
But this will not test the integration within the GitHub Action system.

For that you need to see a workflow as Integration Tests suite
or to mock action/toolkit function with a JS testing library.
  
##--##

# Testing Methods

## For JavaScript based code

- TODO Jest (action + mock) - see actions/checkout tests
  - https://jestjs.io/
  - https://jestjs.io/docs/mock-functions

##--##

# Testing Methods

## For any other programming language based code

You will not have anything except the programming language testing tools.

For example, if your code rely on Shell scripts, you can use [**bats** 🔗](https://github.com/bats-core/bats-core).

In practice, Shell scripts are easly used on Docker container action and Composite action to serve as wrapper or to do the all works.
If both cases, you can use **bats** to help you write a test suite for your action.

##--##

# Testing Methods

## Testing workflows

In addition of testing the code, you can test the whole action from the user point of view in a GitHub Action workflow.

```yaml
- name: Slugify key/value
  uses: ./
  with:
    key: KEY_VALUE
    value: "Never gonna give you up Never gonna let you down"
- name: Validate // Slugify key/value
  run: |
    [[ "${{ env.KEY_VALUE }}" == "Never gonna give you up Never gonna let you down" ]]
    [[ "${{ env.KEY_VALUE_SLUG }}" == "never-gonna-give-you-up-never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_CS }}" == "Never-gonna-give-you-up-Never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_URL }}" == "never-gonna-give-you-up-never-gonna-let-you-down" ]]
    [[ "${{ env.KEY_VALUE_SLUG_URL_CS }}" == "Never-gonna-give-you-up-Never-gonna-let-you-down" ]]
  shell: bash
```

From [**rlespinasse/slugify-value** 🔗](https://github.com/rlespinasse/slugify-value/blob/v1.x/.github/workflows/slugify-value.yaml) action tests.

##--##

# Testing Methods

## Testing workflows

- TODO 1 test = 1 step to run the action, 1 step to test the output

##--##

# Testing Methods

## Testing workflows

- TODO use continue-on-error, conclusion, ...

##--##

# Testing Methods

## Testing workflows

- TODO matrix OS
