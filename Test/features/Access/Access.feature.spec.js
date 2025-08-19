// Generated from: Features\Access\Access.feature
import { test } from "../../../Fixtures/fixtures.ts";

test.describe('Access', () => {

  test('01 - Login', { tag: ['@access', '@login'] }, async ({ Given, page, pages, scenarioContext, Then }) => { 
    await Given('user has logged in as "Admin"', null, { page, pages, scenarioContext }); 
    await Then('user has logged out', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Access\\Access.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@access","@login"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Admin\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Admin\"","children":[{"start":23,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end