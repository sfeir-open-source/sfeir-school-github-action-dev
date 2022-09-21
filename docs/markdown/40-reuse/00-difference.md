<!-- .slide: -->

# Action or Reusable Workflow

## Syntax

- Secrets are treated as inputs on composite action
- Inputs only have a `type` field on reusable workflow
- Job is only composed of one reusable workflow or a set of steps
<!-- .element: class="list-fragment" -->

Notes:

Speaker **Romain**

##--##

# Action or Reusable Workflow

## Strucuture

- **A composite action**
  - Need a folder with the `action.yaml` file
  - Can have multiple steps
<!-- .element: class="list-fragment" -->

- **A reusable workflow**
  - Stored inside the `workflows` folder in one and only file
  - Can have multiple jobs
<!-- .element: class="list-fragment" -->

Notes:

Speaker **Romain**

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

Notes:

Speaker **Romain**
