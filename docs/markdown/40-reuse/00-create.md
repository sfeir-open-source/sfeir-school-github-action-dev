<!-- .slide: -->

# Create an action

You may ask youself the following questions

- The action can be generic enought to be use in more than one context ?
- The action have a dedicated goal (simple or not) achieved by one or multiple features ?

Notes:

- A job is a series of unitary steps (Action or shell commands)
- An Action is a series of tasks to achieve unitary steps or linked steps

##--##

# Create an action

## Workflow or Action

| Question                                                | Preferred choice |
| ------------------------------------------------------- | ---------------- |
| Is the step is simple enougth ?                         | Workflow         |
| Is the step is already an action ?                      | Workflow         |
| Is the series of steps is dedicated to one goal ?       | Action           |
| Is the extraction of steps improve the readability ?    | Action           |
| Is the extraction of steps improve the maintenability ? | Action           |

##--##

# Create an action

## Action in the same repository or not

| Action goal                        | Preferred repository |
| ---------------------------------- | -------------------- |
| strictly related to the repository | Local                |
| generic and usable by others       | Global               |
