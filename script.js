// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
// TODO: Get user input to create and return an array of employee objects

  let employees = JSON.parse(localStorage.getItem("employees")) || [];
  let addAnother = true

  while (addAnother === true) {


    let addEmployees = {
      firstName: prompt("Enter first name "),
      lastName: prompt("Enter last name: "),
      salary: prompt("Enter salary: "),
    };
    employees.push(addEmployees)
    localStorage.setItem("employees", JSON.stringify(employees))
    if (addEmployees.firstName === "" && addEmployees.lastName === "" && addEmployees.salary === "") {
      alert("You neeed to input a value for each prompt.")
      return null
    }

    addAnother = confirm("Do you want to add another employee? ");

  }
  return employees;

}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  console.log(employeesArray, "average salary function")
  const salaryTotal = employeesArray.reduce((accumulator, currentEmployee) => {
    return accumulator + parseInt(currentEmployee.salary, 10)
  }, 0)
  const averageSalary = salaryTotal / employeesArray.length
  console.log(averageSalary.toFixed(2))
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  const getRandomEmployee = Math.floor(Math.random() * employeesArray.length);

  console.log (`Our random employee is!! ${employeesArray[getRandomEmployee].firstName} ${employeesArray[getRandomEmployee].lastName}`);

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
