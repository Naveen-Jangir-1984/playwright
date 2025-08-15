// Generated from: Features\Sales.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Workflows', () => {

  test('01 - Create and Qualify a lead', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
    await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
    await When('user select application as "Sales"', null, { pages }); 
    await And('user "creates" a "lead" with below details', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Jangir"},{"value":"ABC CORP"}]}]}}, { pages }); 
    await And('user changes the "Lead Status" to "Contacted"', null, { pages }); 
    await And('user changes the "Lead Status" to "Nurturing"', null, { pages }); 
    await And('user changes the "Lead Status" to "Qualified"', null, { pages }); 
    await Then('user has logged out', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Sales.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":["@sales","@leads"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And user \"creates\" a \"lead\" with below details","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":17,"value":"\"lead\"","children":[{"start":18,"value":"lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And user changes the \"Lead Status\" to \"Contacted\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Lead Status\"","children":[{"start":18,"value":"Lead Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"Contacted\"","children":[{"start":35,"value":"Contacted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user changes the \"Lead Status\" to \"Nurturing\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Lead Status\"","children":[{"start":18,"value":"Lead Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"Nurturing\"","children":[{"start":35,"value":"Nurturing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user changes the \"Lead Status\" to \"Qualified\"","stepMatchArguments":[{"group":{"start":17,"value":"\"Lead Status\"","children":[{"start":18,"value":"Lead Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"Qualified\"","children":[{"start":35,"value":"Qualified","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end