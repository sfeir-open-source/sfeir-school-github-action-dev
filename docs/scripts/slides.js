import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return [
    '00-school/00-TITLE.md',
    '00-school/01-speaker-thibauld.md',
    '00-school/02-speaker-romain.md',
    '00-school/03-participant.md',
    '00-school/04-objectives.md',
    '00-school/05-TOC.md',
    '00-school/06-prerequisites.md'
  ];
}

function actionSlides() {
  return [
    '01-action/00-TITLE.md',
    '01-action/01-definition.md'
  ];
}

function structureSlides() {
  return [
    '02-structure/00-TITLE.md',
    '02-structure/01-content.md',
    '02-structure/02-minimal.md',
    '02-structure/03-inputs.md',
    '02-structure/04-outputs.md',
    '02-structure/05-runs.md',
    '02-structure/06-quality.md'
   ];
}


function usagesSlides() {
  return [
    '03-usage/00-TITLE.md',
    '03-usage/01-uses.md',
    '03-usage/03-exercises.md'
  ];
}

function interactionsSlides() {
  return [
    '04-interactions/00-TITLE.md',
    '04-interactions/00-interactions.md',
    '04-interactions/00-access-write.md',
    '04-interactions/00-toolkit.md'
  ];
}

function accessSlides() {
  return [
    '05-access/00-TITLE.md',
    '05-access/01-contexts.md',
    '05-access/02-runners.md',
  ];
}

function writeSlides() {
  return [
    '06-write/00-TITLE.md',
    '06-write/01-configure.md',
    '06-write/02-communicate.md',
    '06-write/03-github-api.md',
    '06-write/04-exercises.md'
  ];
}

function testingSlides() {
  return [
    '07-testing/00-TITLE.md',
    '07-testing/01-testing.md'
  ];
}

function testingMethodsSlides() {
  return [
    '08-testing-methods/00-TITLE.md',
    '08-testing-methods/01-javascript.md',
    '08-testing-methods/02-others.md',
    '08-testing-methods/03-bats-setup.md',
    '08-testing-methods/04-bats-test.md',
    '08-testing-methods/05-workflows.md',
    '08-testing-methods/06-exercises.md'
  ];
}

function reuseSlides() {
  return [
    '09-reuse/00-TITLE.md',
    '09-reuse/01-create.md',
    '09-reuse/02-comparison.md',
    '09-reuse/03-difference.md',
    '09-reuse/04-behavior.md',
    '09-reuse/05-exercises.md'
  ];
}

function lifecycleSlides() {
  return [
    '10-lifecycle/00-TITLE.md',
    '10-lifecycle/01-birth.md',
    '10-lifecycle/02-release.md',
    '10-lifecycle/03-marketplace.md'
  ];
}

function openInnerSlides() {
  return [
    '11-open-inner/00-TITLE.md',
    '11-open-inner/01-community.md',
    '11-open-inner/02-maintainer.md',
    '11-open-inner/03-used-by-who.md',
    '11-open-inner/04-exercises.md'
  ];
}

function conclusionSlides() {
  return [
    '12-conclusion/00-TITLE.md',
    '12-conclusion/01-for-the-road.md',
    '12-conclusion/02-TITLE.md',
    '12-conclusion/03-institute.md'
  ];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...actionSlides(), //
    ...structureSlides(), //
    ...usagesSlides(), //
    ...interactionsSlides(), //
    ...accessSlides(), //
    ...writeSlides(), //
    ...testingSlides(), //
    ...testingMethodsSlides(), //
    ...reuseSlides(), //
    ...lifecycleSlides(), //
    ...openInnerSlides(), //
    ...conclusionSlides() //
  ].map(slidePath => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
