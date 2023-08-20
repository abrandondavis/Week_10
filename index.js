

// IIFE (Immediately-Invoked Function Expression) to encapsulate all code inside
(function () {
  'use strict'
  // Initializing variables to grab dom objects
  const item = document.getElementById('item');
  const price = document.getElementById('price');
  const submit = document.getElementById('submit');
  const tableBody = document.getElementById('table-body');
  let rowNumber = 1;
  let itemValue;
  let priceValue;


  /**
   * Base function to add row to parent element
   * @param {*} item 
   * @param {*} price 
   * @returns The required HTML code to create a new row on the table
   */
  function addTableRow(item, price) {
    let tr = document.createElement('tr');

    // Having a row number is entirely unnecessary and is just proof of concept for the assignment
    tr.innerHTML = `
      <td>${rowNumber}</td>
      <td>${item}</td>
      <td>${price}</td>
    `;
    rowNumber++
    return tr;
  }

  // Click event listener
  submit.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // The above line was a necessity to prevent some weird caching issues where the page was working then would auto refresh on submission and clear added added rows
    const itemValue = item.value.trim(); // Trim whitespace
    const priceValue = price.value.trim(); // Trim whitespace

    // Check if inputs are empty
    // Does not check whether price is a numeric value or not, only that the field is not empty
    if (itemValue === '' || priceValue === '') {
      alert('Please fill in all fields before submitting.');

      // Clear input fields
      item.value = '';
      price.value = '';
      return;
    }
    // Invokes function to add table row, declares it as a variable
    const tableRow = addTableRow(itemValue, priceValue);

    // Adds the HTML created by the function to the document
    tableBody.appendChild(tableRow);

    // Clear input fields
    item.value = '';
    price.value = '';
  });

})();