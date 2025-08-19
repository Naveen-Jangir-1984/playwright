// Generated from: Features\Service\Cases.feature
import { test } from "../../../Fixtures/fixtures.ts";

test.describe('Cases', () => {

  test('Create, Escalate and Delete a case', { tag: ['@service', '@cases'] }, async ({ Given, page, pages, scenarioContext, When, And, Then }) => { 
    await Given('user has logged in as "Anita Jangir"', null, { page, pages, scenarioContext }); 
    await When('user select application as "Service"', null, { pages }); 
    await And('user "creates" the account', {"dataTable":{"rows":[{"cells":[{"value":"Account Name"}]},{"cells":[{"value":"Account"}]}]}}, { pages, scenarioContext }); 
    await And('user "creates" the case', {"dataTable":{"rows":[{"cells":[{"value":"Account Name"},{"value":"Case Origin"}]},{"cells":[{"value":"Account"},{"value":"Phone"}]}]}}, { pages, scenarioContext }); 
    await And('user changes the case status to "Working"', null, { pages }); 
    await And('user changes the case status to "Escalated"', null, { pages }); 
    await And('user "deletes" the case', null, { pages, scenarioContext }); 
    await And('user "deletes" the account', null, { pages, scenarioContext }); 
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
  {"pwTestLine":6,"pickleLine":5,"tags":["@service","@cases"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given user has logged in as \"Anita Jangir\"","stepMatchArguments":[{"group":{"start":22,"value":"\"Anita Jangir\"","children":[{"start":23,"value":"Anita Jangir","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When user select application as \"Service\"","stepMatchArguments":[{"group":{"start":27,"value":"\"Service\"","children":[{"start":28,"value":"Service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And user \"creates\" the account","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And user \"creates\" the case","stepMatchArguments":[{"group":{"start":5,"value":"\"creates\"","children":[{"start":6,"value":"creates","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And user changes the case status to \"Working\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Working\"","children":[{"start":33,"value":"Working","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And user changes the case status to \"Escalated\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Escalated\"","children":[{"start":33,"value":"Escalated","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":13,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the case","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And user \"deletes\" the account","stepMatchArguments":[{"group":{"start":5,"value":"\"deletes\"","children":[{"start":6,"value":"deletes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then user has logged out","stepMatchArguments":[]}]},
]; // bdd-data-end