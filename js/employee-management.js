/*eslint-env browser*/

var row = 1;
var display = document.getElementById("display");

var employeeList = [
    ["John Doe", "CEO", "4008"],
    ["Lipsum Opsum", "CTO", "4208"],
    ["Sally Smith", "Quality Assurance", "3018"],
    ["Mark Martin", "VP Sakes", "3582"],
    ["John Johnson", "Marketing", "5085"]
];

window.addEventListener("load", function () {

    "use strict";
    displayEmployees();

});

function displayEmployees() {

    while (display.rows.length > 1) {
        display.deleteRow(1);

    }

    for (var employee of employeeList) {

        var newEmployee = display.insertRow(row);
        row++;

        var cell1 = newEmployee.insertCell(0);
        var cell2 = newEmployee.insertCell(1);
        var cell3 = newEmployee.insertCell(2);

        cell1.innerHTML = employee[0];
        cell2.innerHTML = employee[1];
        cell3.innerHTML = employee[2];

        var deleteCell = display.rows[display.rows.length - 1].insertCell();

        var button = document.createElement("input");
        button.type = "button";
        button.value = "Delete";

        button.addEventListener('click', function () {
            deleteEmployee(event);
        });

        deleteCell.appendChild(button);
        deleteCell.className = "deleteCell";

    }

    updateEmployees();

}

var $ = function (id) {

    "use strict";
    return document.getElementById(id);

}

function updateEmployees() {

    document.getElementById('employees').innerHTML = employeeList.length;

}

var submit = window.document.getElementById("submit");

submit.addEventListener("click", function () {

    var employeeName = window.document.getElementById('employeeName').value;
    var employeeTitle = window.document.getElementById("employeeTitle").value;
    var employeeExtension = window.document.getElementById("employeeExtension").value;

    var valid = validation(employeeName, employeeTitle, employeeExtension);

    if (valid) {

        employeeList.push([employeeName, employeeTitle, employeeExtension]);
        row = 1;
        displayEmployees();
        document.getElementById("form").reset();

    }
});

function addEmployee(employeeName, employeeTitle, employeeExtension) {

    employeeList.push([employeeName, employeeTitle, employeeExtension]);
    document.getElementById("form").reset();
    row = 1;
    displayEmployees();

}

function deleteEmployee(employee) {

    var index = employee.target.closest("tr").rowIndex - 1;
    employeeList.splice(index, 1);
    row = 1;
    displayEmployees();

}

function validation(employeeName, employeeTitle, employeeExtension) {

    if (employeeName == "") {
        alert("Please provide your name!");
        return false;
    }

    if (employeeTitle == "") {
        alert("Please provide your title!");
        return false;
    }

    if (employeeExtension == "") {
        alert("Please provide your extension!");
        return false;
    }
    return (true);
}
