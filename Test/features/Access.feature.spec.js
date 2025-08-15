// Generated from: Features\Access.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Access', () => {

  test('Login as Anita', async ({ Given, page, pages, scenarioContext, Then }) => { 
    await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
    await Then('user has logged out', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Access.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end