# Lab 1

Create an Action using Docker container taking inputs to serve as **cowsay** arguments

## Tips

- Github Action syntax for [**Runs** 🔗](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-action) in Docker container action
- Cowsay [**manual page** 🔗](https://linux.die.net/man/1/cowsay)

## Steps

- Create a repository
- Add the file `testing-workflow.yml` which will serve you to test the action
- Use the file `action.yml` and
  - Add a required input to tell the cow what to say
  - Add an optional input to set the eyes of the cow (default to `oo`)
  - Pass them as args to the docker image
