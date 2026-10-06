# SpendWise - Week Assignment

SpendWise is a personal budgeting and expense-tracking web application built with HTML, CSS and JavaScript.

## Improvements Made This Week

This week's version makes SpendWise interactive instead of only displaying static information. The application now:

- Stores multiple expenses in an array.
- Uses loops to calculate total spending and display expense records.
- Uses conditional statements to provide budget feedback.
- Updates the dashboard dynamically through DOM manipulation.
- Uses event listeners for the expense form, budget input and clear button.
- Allows users to add and manage expense records directly on the webpage.
- Shows warnings when spending reaches 80% of the budget or goes over budget.

## JavaScript Concepts Demonstrated

### 1. Conditionals

SpendWise uses `if`, `else if` and `else` statements to make decisions.

For example:

- If the budget is zero or less, the user receives a warning.
- If spending is greater than the budget, the application reports that the user is over budget.
- If spending reaches 80% of the budget, the application displays a caution message.
- Otherwise, the application displays the remaining balance.

Conditionals are also used to validate user input before adding a new expense.

### 2. Arrays

Expenses are stored in an array called `expenses`.

Each expense is an object containing:

- `name`
- `amount`
- `category`
- `date`

This allows the application to manage many expense records instead of using separate variables for every expense.

### 3. Loops

A `for` loop is used to process the expense array.

The loop is used to:

- Calculate the total amount spent.
- Go through every expense record.
- Create and display a table row for each expense.

### 4. DOM Manipulation

The application uses JavaScript DOM methods such as:

- `document.getElementById()`
- `document.createElement()`
- `textContent`
- `innerHTML`
- `appendChild()`

These methods update the webpage when the user's data changes.

For example, adding an expense immediately updates the expense table, total spent, remaining balance and expense count.

### 5. Events

SpendWise responds to user actions using event listeners.

The project handles:

- Form submission when the user adds an expense.
- Budget changes when the user changes the monthly budget.
- Button clicks when the user clears all expenses.

The form uses `preventDefault()` so the page does not reload when an expense is submitted.

## Challenges Encountered and Solutions

### Challenge 1: Keeping the dashboard updated

At first, changing the expense data would not automatically update the webpage.

**Solution:** A `refreshApp()` function was created. It calls both `renderExpenses()` and `updateDashboard()` whenever the data changes.

### Challenge 2: Calculating totals for multiple expenses

Using separate variables for each expense would make the project difficult to maintain.

**Solution:** All expense records are stored in the `expenses` array. A loop goes through the array and calculates the total.

### Challenge 3: Providing useful budget feedback

The application needed to react differently depending on how much the user had spent.

**Solution:** Conditional statements compare total spending with the monthly budget and display appropriate messages.

## How to Run the Project

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Enter a monthly budget.
5. Add expenses using the form.
6. Test the budget warnings and clear button.

## Project Files

```text
SpendWise/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies

- HTML5
- CSS3
- JavaScript
- DOM Manipulation
- JavaScript Events
- Arrays
- Loops
- Conditional Statements
