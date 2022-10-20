import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/00-speaker-thibauld.md',
    '00-school/00-speaker-romain.md',
    '00-school/00-participant.md',
    '00-school/00-prerequisites.md',
    '00-school/00-plan.md'
  ];
}

function syntaxSlides() {
  return [
    '10-syntax/00-TITLE.md',
    '10-syntax/00-definition.md',
    '10-syntax/01-TITLE.md',
    '10-syntax/01-content.md',
    '10-syntax/01-minimal.md',
    '10-syntax/01-inputs.md',
    '10-syntax/01-outputs.md',
    '10-syntax/01-runs.md',
    '10-syntax/01-quality.md',
    '10-syntax/02-TITLE.md',
    '10-syntax/02-uses.md',
    '10-syntax/99-TITLE.md',
    '10-syntax/99-exercices.md'
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
    '20-interactions/01-runners.md',
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
    '30-testing/01-bats-setup.md',
    '30-testing/01-bats-test.md',
    '30-testing/01-workflows.md',
    '30-testing/99-TITLE.md',
    '30-testing/99-exercices.md'
  ];
}

function reuseSlides() {
  return [
    '40-reuse/00-TITLE.md',
    '40-reuse/00-create.md',
    '40-reuse/00-comparison.md',
    '40-reuse/00-difference.md',
    '40-reuse/00-behavior.md',
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
    '50-lifecycle/01-TITLE.md',
    '50-lifecycle/01-community.md',
    '50-lifecycle/01-maintainer.md',
    '50-lifecycle/01-used-by-who.md',
    '50-lifecycle/99-TITLE.md',
    '50-lifecycle/99-exercices.md'
  ];
}

function conclusionSlides() {
  return [
    '60-conclusion/00-TITLE.md',
    '60-conclusion/00-for-the-road.md',
    '60-conclusion/01-TITLE.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...syntaxSlides(), //
    ...interactionsSlides(), //
    ...testingSlides(), //
    ...reuseSlides(), //
    ...lifecycleSlides(), //
    ...conclusionSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
