// Generated from: Features\Sales\Leads.feature
import { test } from "../../../Fixtures/fixtures.ts";

test.describe('Leads', () => {

  test.describe('Create, Close and Delete a Lead', () => {

    test('Example #1', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
      await Given('user has logged in as "Admin"', null, { page, pages, scenarioContext }); 
      await When('user select application as "Sales"', null, { pages, scenarioContext }); 
      await And('user "creates" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Lastname"},{"value":"ABC CORP"}]}]}}, { pages, scenarioContext }); 
      await And('user "modifies" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Lead Status"}]},{"cells":[{"value":"Working - Contacted"}]}]}}, { pages, scenarioContext }); 
      await And('user "modifies" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Lead Status"}]},{"cells":[{"value":"Closed - Converted"}]}]}}, { pages, scenarioContext }); 
      await And('user "deletes" the "Lead"', null, { pages, scenarioContext }); 
      await Then('user has logged out', null, { pages }); 
    });

    test('Example #2', { tag: ['@sales', '@leads'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
      await Given('user has logged in as "Admin"', null, { page, pages, scenarioContext }); 
      await When('user select application as "Sales"', null, { pages, scenarioContext }); 
      await And('user "creates" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Last Name"},{"value":"Company"}]},{"cells":[{"value":"Lastname"},{"value":"ABC CORP"}]}]}}, { pages, scenarioContext }); 
      await And('user "modifies" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Lead Status"}]},{"cells":[{"value":"Working - Contacted"}]}]}}, { pages, scenarioContext }); 
      await And('user "modifies" the "Lead"', {"dataTable":{"rows":[{"cells":[{"value":"Lead Status"}]},{"cells":[{"value":"Closed - Not Converted"}]}]}}, { pages, scenarioContext }); 
      await And('user "deletes" the "Lead"', null, { pages, scenarioContext }); 
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
  {"pwTestLine":8,"pickleLine":22,"tags":["@sales","@leads"],"steps":[{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Admin\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Admin\"","children":[{"start":23,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Lead\"","children":[{"start":20,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Lead\"","children":[{"start":21,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Lead\"","children":[{"start":21,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Lead\"","children":[{"start":20,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":23,"tags":["@sales","@leads"],"steps":[{"pwStepLine":19,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Admin\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Admin\"","children":[{"start":23,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Sales\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Sales\"","children":[{"start":28,"value":"Sales","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Lead\"","children":[{"start":20,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Lead\"","children":[{"start":21,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":23,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Lead\"","children":[{"start":21,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":24,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the \"Lead\"","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Lead\"","children":[{"start":20,"value":"Lead","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":25,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end