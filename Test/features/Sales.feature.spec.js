// Generated from: Features\Sales.feature
import { test } from "../../Fixtures/fixtures.ts";

test.describe('Sales', () => {

  test('01 - Create, Qualify and Delete a lead', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
    await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
    await When('user select application as "Sales"', null, { pages }); 
    await And('user "creates" the lead', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Lastname"},{"value":"ABC CORP"}]}]}}, { pages, scenarioContext }); 
    await And('user changes the lead status to "Contacted"', null, { pages }); 
    await And('user changes the lead status to "Nurturing"', null, { pages }); 
    await And('user changes the lead status to "Qualified"', null, { pages }); 
    await And('user "deletes" the lead', null, { pages, scenarioContext }); 
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
  {"pwTestLine":6,"pickleLine":5,"tags":["@sales","@leads"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Contacted\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Contacted\"","children":[{"start":33,"value":"Contacted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Nurturing\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Nurturing\"","children":[{"start":33,"value":"Nurturing","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Qualified\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Qualified\"","children":[{"start":33,"value":"Qualified","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end