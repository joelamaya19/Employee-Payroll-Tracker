// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Prompts message for user to input employee info
  const employees = [];

  let keepGoing = true;
  while (keepGoing) {
    let firstName = prompt("Enter First Name");
    let lastName = prompt("Enter Last Name");
    let salary = prompt("Enter Salary");

    if (!isNaN(salary)) {
      salary = prompt(`Salary must be a number, please re-enter.`);
      salary = parseFloat(salary);
    }
    
    // Validating lastName
    if (!lastName.trim()) {
      lastName = prompt(`Last Name cannot be empty, please re-enter.`);
    }
    
    // Validating firstName
    if (!firstName.trim()) {
      firstName = prompt(`First Name cannot be empty, please re-enter.`);
    }

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }

    employees.push(employee);

    keepGoing = confirm('Do you want to continue?');
  }
  return employees;
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // Gathers all employees and find the average of their all their salaries combine.
  let totalSalary = 0;

  const totalEmployees = employeesArray.length;
  for ( let x =0; x<employeesArray.length; x++ ) {
    totalSalary+= employeesArray[x].salary;
    console.log(totalSalary);
  }
  averageSalary = totalSalary / totalEmployees;
  console.log(`The average employee salary between our ${totalEmployees} employee(s) is ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Selects a random employee, and console logs the winner at random.
  const randomIndex = Math.floor(Math.random()* employeesArray.length);

  const randomEmployee = employeesArray[randomIndex];

  const employeeFirstName = randomEmployee.firstName;
  const employeeLastName = randomEmployee.lastName;

  console.log(`Congratulations to ${employeeFirstName} ${employeeLastName}, our random drawing winner!`);

}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');


  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

// Tracks the date of employee and displays as a table.
const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
