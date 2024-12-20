// Array to store the expenses
let expenses = [];

// Function to add an expense
function addExpense() {
  const name = document.getElementById('expense-name').value;
  const amount = document.getElementById('expense-amount').value;

  if (name && amount) {
    // Create an expense object
    const expense = { name: name, amount: parseFloat(amount) };

    // Add the expense to the array
    expenses.push(expense);

    // Clear the input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';

    // Update the expense list display
    displayExpenses();
  } else {
    alert('Please enter both expense name and amount.');
  }
}

// Function to display expenses
function displayExpenses() {
  const expenseList = document.getElementById('expenses');
  expenseList.innerHTML = ''; // Clear the list first

  // Loop through the expenses array and display each expense
  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${expense.name} - $${expense.amount.toFixed(2)} 
                    <button onclick="removeExpense(${index})">Remove</button>`;
    expenseList.appendChild(li);
  });
}

// Function to remove an expense
function removeExpense(index) {
  // Remove the expense from the array
  expenses.splice(index, 1);

  // Update the display
  displayExpenses();
}


