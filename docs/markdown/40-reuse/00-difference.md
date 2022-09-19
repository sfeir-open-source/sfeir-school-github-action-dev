<!-- .slide: -->

# Action or Reusable Workflow

## Syntax

- Secrets are treated as inputs on composite action
- Inputs only have a `type` field on reusable workflow
- Job is only composed of one reusable workflow or a set of steps
<!-- .element: class="list-fragment" -->

##--##

# Action or Reusable Workflow

## Strucuture

- **A composite action**
  - need a folder with the `action.yaml` file
  - can have multiple steps
<!-- .element: class="list-fragment" -->

- **A reusable workflow**
  - is stored inside the `workflows` folder in one and only file
  - can have multiple jobs
<!-- .element: class="list-fragment" -->

##--##

# Action or Reusable Workflow

- **An action**
  - **CAN** be called from a reusable workflow
  - **CAN** be called from a composite action
<!-- .element: class="list-fragment" -->
  
- **A reusable workflow**
  - **CAN** be called from a reusable workflow
  - **CAN'T** be called from a composite action
<!-- .element: class="list-fragment" -->
