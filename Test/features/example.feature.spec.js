// Generated from: Features\example.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Login feature', () => {

  test('#1 Standard User', { tag: ['@test'] }, async ({ Given, loginPage, Then, inventoryPage }) => { 
    await Given('user login as "StandardUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

  test('#2 Problem User', async ({ Given, loginPage, Then, inventoryPage }) => { 
    await Given('user login as "ProblemUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

  test('#3 Locked User', async ({ Given, loginPage, Then, inventoryPage }) => { 
    await Given('user login as "LockedUser"', null, { loginPage }); 
    await Then('user should see the inventory title', null, { inventoryPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\example.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@test"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user login as \"StandardUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"StandardUser\"","children":[{"start":15,"value":"StandardUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":11,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":12,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given user login as \"ProblemUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"ProblemUser\"","children":[{"start":15,"value":"ProblemUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":12,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Context","textWithKeyword":"Given user login as \"LockedUser\"","stepMatchArguments":[{"group":{"start":14,"value":"\"LockedUser\"","children":[{"start":15,"value":"LockedUser","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user should see the inventory title","stepMatchArguments":[]}]},
]; // bdd-data-end