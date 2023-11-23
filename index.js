var form = document.querySelector("form")
var Name = document.getElementById("name")
var docterID = document.getElementById("docID")
var department = document.getElementById("dept")
var experience = document.getElementById("exp")
var email = document.getElementById("email")
var mobile = document.getElementById("mbl")

var tbody = document.querySelector("tbody")

var arr = [];

// Load data from localStorage on page load
if (localStorage.getItem("doctorData")) {
    arr = JSON.parse(localStorage.getItem("doctorData"));
    displayData();
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let data = {};
    data.name = Name.value
    data.doctorID = docterID.value
    data.department = department.value
    data.experience = experience.value
    data.email = email.value
    data.mobile = mobile.value
    data.role = experience.value > 5 ? "Senior" : experience.value >= 2 ? "Junior" : "Trainee";
    data.delete = "Delete"

    arr.push(data)

    // Save data to localStorage
    localStorage.setItem("doctorData", JSON.stringify(arr));

    tbody.innerHTML = ""; // Clear the tbody
    displayData();
});

function displayData() {
    arr.forEach((el, index) => {
        let row = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")

        console.log(el);
        td1.innerText = el.name
        td2.innerText = el.doctorID
        td3.innerText = el.department
        td4.innerText = el.experience
        td5.innerText = el.email
        td6.innerText = el.mobile
        td7.innerText = el.role
        td8.innerText = "Delete"

        td8.style.backgroundColor = "red";

        td8.addEventListener("click", function () {
            arr.splice(index, 1); // Remove the corresponding data from the array
            localStorage.setItem("doctorData", JSON.stringify(arr)); // Update localStorage
            tbody.removeChild(row); // Remove the corresponding row from the table
        });

        row.append(td1, td2, td3, td4, td5, td6, td7, td8);
        tbody.append(row);
    });
}
