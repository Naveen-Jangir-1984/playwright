// Generated from: Features\Service\Cases.feature
import { test } from "../../../Fixtures/fixtures.ts";

test.describe('Cases', () => {

  test('Create, Escalate and Delete a case', { tag: ['@service', '@cases'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
    await Given('user has logged in as "Admin"', null, { page, pages, scenarioContext }); 
    await When('user select application as "Service"', null, { pages, scenarioContext }); 
    await And('user "creates" the "Account"', {"dataTable":{"rows":[{"cells":[{"value":"Account Name"}]},{"cells":[{"value":"Account"}]}]}}, { pages, scenarioContext }); 
    await And('user "creates" the "Case"', {"dataTable":{"rows":[{"cells":[{"value":"Account Name"},{"value":"Case Origin"}]},{"cells":[{"value":"Account"},{"value":"Phone"}]}]}}, { pages, scenarioContext }); 
    await And('user "modifies" the "Case"', {"dataTable":{"rows":[{"cells":[{"value":"Status"}]},{"cells":[{"value":"Working"}]}]}}, { pages, scenarioContext }); 
    await And('user "modifies" the "Case"', {"dataTable":{"rows":[{"cells":[{"value":"Status"}]},{"cells":[{"value":"Escalated"}]}]}}, { pages, scenarioContext }); 
    await And('user "deletes" the "Case"', null, { pages, scenarioContext }); 
    await And('user "deletes" the "Account"', null, { pages, scenarioContext }); 
    await Then('user has logged out', null, { pages }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('Features\\Service\\Cases.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":["@service","@cases"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Admin\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Admin\"","children":[{"start":23,"value":"Admin","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Service\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Service\"","children":[{"start":28,"value":"Service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the \"Account\"","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Account\"","children":[{"start":20,"value":"Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user \"creates\" the \"Case\"","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Case\"","children":[{"start":20,"value":"Case","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Case\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Case\"","children":[{"start":21,"value":"Case","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user \"modifies\" the \"Case\"","stepMatchArguments":[{"group":{"start":5,"value":"\"modifies\"","children":[{"start":6,"value":"modifies","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":20,"value":"\"Case\"","children":[{"start":21,"value":"Case","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the \"Case\"","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Case\"","children":[{"start":20,"value":"Case","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the \"Account\"","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":19,"value":"\"Account\"","children":[{"start":20,"value":"Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end