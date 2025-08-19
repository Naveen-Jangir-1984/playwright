// Generated from: Features\Sales\Leads.feature
import { test } from "../../../Fixtures/fixtures.ts";

test.describe('Leads', () => {

  test.describe('Create, Qualify/Unqualify and Delete a Lead', () => {

    test('Example #1', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
      await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
      await When('user select application as "Sales"', null, { pages }); 
      await And('user "creates" the lead', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Lastname"},{"value":"ABC CORP"}]}]}}, { pages, scenarioContext }); 
      await And('user changes the lead status to "Working - Contacted"', null, { pages }); 
      await And('user changes the lead status to "Closed - Converted"', null, { pages }); 
      await And('user "deletes" the lead', null, { pages, scenarioContext }); 
      await Then('user has logged out', null, { pages }); 
    });

    test('Example #2', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
      await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
      await When('user select application as "Sales"', null, { pages }); 
      await And('user "creates" the lead', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Lastname"},{"value":"ABC CORP"}]}]}}, { pages, scenarioContext }); 
      await And('user changes the lead status to "Working - Contacted"', null, { pages }); 
      await And('user changes the lead status to "Closed - Not Converted"', null, { pages }); 
      await And('user "deletes" the lead', null, { pages, scenarioContext }); 
      await Then('user has logged out', null, { pages }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Sales\\Leads.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":18,"tags":["@sales","@leads"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Working - Contacted\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Working - Contacted\"","children":[{"start":33,"value":"Working - Contacted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Closed - Converted\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Closed - Converted\"","children":[{"start":33,"value":"Closed - Converted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":["@sales","@leads"],"steps":[{"pwStepLine":19,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Working - Contacted\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Working - Contacted\"","children":[{"start":33,"value":"Working - Contacted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And user changes the lead status to \"Closed - Not Converted\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Closed - Not Converted\"","children":[{"start":33,"value":"Closed - Not Converted","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the lead","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end