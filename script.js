// SpendWise Week Assignment
// Demonstrates conditionals, arrays, loops, DOM manipulation and events.

let expenses = [
  {
    name: "Groceries",
    amount: 2500,
    category: "Food",
    date: "2026-10-01"
  },
  {
    name: "Bus Fare",
    amount: 800,
    category: "Transport",
    date: "2026-10-02"
  },
  {
    name: "Internet",
    amount: 3000,
    category: "Utilities",
    date: "2026-10-03"
  }
];

let monthlyBudget = 50000;

// DOM elements
const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");
const budgetInput = document.getElementById("budgetInput");
const budgetDisplay = document.getElementById("budgetDisplay");
const totalSpent = document.getElementById("totalSpent");
const remaining = document.getElementById("remaining");
const expenseCount = document.getElementById("expenseCount");
const expenseTableBody = document.getElementById("expenseTableBody");
const emptyState = document.getElementById("emptyState");
const budgetFeedback = document.getElementById("budgetFeedback");
const clearExpenses = document.getElementById("clearExpenses");

function formatCurrency(amount) {
  return `KSh ${amount.toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
}

function calculateTotal() {
  let total = 0;

  // Loop through the array and add every expense amount.
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
  }

  return total;
}

function updateDashboard() {
  const spent = calculateTotal();
  const balance = monthlyBudget - spent;

  budgetDisplay.textContent = formatCurrency(monthlyBudget);
  totalSpent.textContent = formatCurrency(spent);
  remaining.textContent = formatCurrency(balance);
  expenseCount.textContent = expenses.length;

  // Conditional decision making.
  if (monthlyBudget <= 0) {
    budgetFeedback.textContent = "Please enter a budget greater than KSh 0.";
  } else if (spent > monthlyBudget) {
    budgetFeedback.textContent =
      `Warning: You are over budget by ${formatCurrency(Math.abs(balance))}.`;
  } else if (spent >= monthlyBudget * 0.8) {
    budgetFeedback.textContent =
      "Careful: You have used 80% or more of your monthly budget.";
  } else {
    budgetFeedback.textContent =
      `Good job! You still have ${formatCurrency(balance)} available.`;
  }
}

function renderExpenses() {
  // Clear the current table before rebuilding it.
  expenseTableBody.innerHTML = "";

  if (expenses.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  // Loop through every record and update the DOM.
  for (let i = 0; i < expenses.length; i++) {
    const expense = expenses[i];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${expense.name}</td>
      <td>${formatCurrency(expense.amount)}</td>
      <td>${expense.category}</td>
      <td>${expense.date}</td>
    `;

    expenseTableBody.appendChild(row);
  }
}

function refreshApp() {
  renderExpenses();
  updateDashboard();
}

// Event listener for the expense form.
expenseForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);
  const category = expenseCategory.value;

  // Validate user input using conditionals.
  if (name === "" || amount <= 0 || category === "") {
    alert("Please complete all fields with valid information.");
    return;
  }

  // Add a new object to the expenses array.
  expenses.push({
    name: name,
    amount: amount,
    category: category,
    date: new Date().toISOString().split("T")[0]
  });

  expenseForm.reset();
  refreshApp();
});

// Event listener for changing the monthly budget.
budgetInput.addEventListener("change", function() {
  const newBudget = Number(budgetInput.value);

  if (newBudget < 0 || Number.isNaN(newBudget)) {
    alert("Please enter a valid budget.");
    budgetInput.value = monthlyBudget;
    return;
  }

  monthlyBudget = newBudget;
  refreshApp();
});

// Event listener for clearing all expenses.
clearExpenses.addEventListener("click", function() {
  if (expenses.length === 0) {
    alert("There are no expenses to clear.");
    return;
  }

  const confirmed = confirm("Are you sure you want to clear all expenses?");

  if (confirmed) {
    expenses = [];
    refreshApp();
  }
});

// Initial page rendering.
refreshApp();
