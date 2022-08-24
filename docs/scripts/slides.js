// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/00-speaker-rlespinasse.md',
    '00-school/00-participant.md',
    '00-school/00-prerequisites.md',
    '00-school/00-plan.md'
  ];
}

function codeSlides() {
  return [
    '10-code/00-TITLE.md',
    '10-code/00-definition.md',
    '10-code/01-TITLE.md',
    '10-code/01-content.md',
    '10-code/01-minimal.md',
    '10-code/01-inputs.md',
    '10-code/01-outputs.md',
    '10-code/01-runs.md',
    '10-code/01-marketplace.md',
    '10-code/02-TITLE.md',
    '10-code/02-uses.md',
    '10-code/99-TITLE.md',
    '10-code/99-exercices.md'
  ];
}

function interactionsSlides() {
  return [
    '20-interactions/00-TITLE.md',
    '20-interactions/00-interactions.md',
    '20-interactions/00-access-write.md',
    '20-interactions/00-toolkit.md',
    '20-interactions/01-TITLE.md',
    '20-interactions/01-contexts.md',
    '20-interactions/01-environments.md',
    '20-interactions/02-TITLE.md',
    '20-interactions/02-configure.md',
    '20-interactions/02-communicate.md',
    '20-interactions/02-github-api.md',
    '20-interactions/99-TITLE.md',
    '20-interactions/99-exercices.md'
  ];
}

function testingSlides() {
  return [
    '30-testing/00-TITLE.md',
    '30-testing/00-testing.md',
    '30-testing/01-TITLE.md',
    '30-testing/01-javascript.md',
    '30-testing/01-others.md',
    '30-testing/01-workflows.md',
    '30-testing/99-TITLE.md',
    '30-testing/99-exercices.md'
  ];
}

function reuseSlides() {
  return [
    '40-reuse/00-TITLE.md',
    '40-reuse/00-create.md',
    '40-reuse/00-reusable-workflow.md',
    '40-reuse/99-TITLE.md',
    '40-reuse/99-exercices.md'
  ];
}

function lifecycleSlides() {
  return [
    '50-lifecycle/00-TITLE.md',
    '50-lifecycle/00-birth.md',
    '50-lifecycle/00-release.md',
    '50-lifecycle/00-marketplace.md',
    '50-lifecycle/00-life-and-death.md',
    '50-lifecycle/99-TITLE.md',
    '50-lifecycle/99-exercices.md'
  ];
}

function conclusionSlides() {
  return [
    '60-conclusion/00-TITLE.md',
    '60-conclusion/00-for-the-road.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...codeSlides(), //
    ...interactionsSlides(), //
    ...testingSlides(), //
    ...reuseSlides(), //
    ...lifecycleSlides(), //
    ...conclusionSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

export function usedSlides() {
  return formation();
}
