// Generated from: Features\Accounts.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Accounts', () => {

  test('01 - Create and Delete an account', { tag: ['@sales', '@accounts'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
    await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
    await When('user select application as "Sales"', null, { pages }); 
    await And('user "creates" the account', {"dataTable":{"rows":[{"cells":[{"value":"Account Name"}]},{"cells":[{"value":"Account"}]}]}}, { pages, scenarioContext }); 
    await And('user "deletes" the account', null, { pages, scenarioContext }); 
    await Then('user has logged out', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Accounts.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@sales","@accounts"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the account","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the account","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end