
let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

function displayStudents() {
    table.innerHTML = "";

    students.forEach(function(student, index) {
        let row = document.createElement("tr");

        [
            index + 1,
            student.name,
            student.email,
            student.phone,
            student.course,
            student.gender
        ].forEach(function(value) {
            let cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        let actionCell = document.createElement("td");
        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";

        deleteButton.onclick = function() {
            students.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        };

        actionCell.appendChild(deleteButton);
        row.appendChild(actionCell);
        table.appendChild(row);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value,
        course: document.getElementById("course").value,
        gender: document.getElementById("gender").value
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    displayStudents();
    form.reset();

    alert("Student registered successfully!");
});

displayStudents();
