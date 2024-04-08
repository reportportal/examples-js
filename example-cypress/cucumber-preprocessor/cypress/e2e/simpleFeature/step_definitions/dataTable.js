import { When, Then } from '@badeball/cypress-cucumber-preprocessor';

let sum = 0;

When('I add all following numbers:', (dataTable) => {
  sum = dataTable.rawTable
    .slice(1)
    .reduce(
      (rowA, rowB) =>
        rowA.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10)) +
        rowB.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10)),
    );
});

Then('I verify the datatable result is equal to {int}', (result) => {
  expect(sum).to.equal(result);
});
