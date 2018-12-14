function departureClick() {
    var tables = document.getElementById("departureTable");
    var tableHeader = document.getElementById("tableHeader");
    var tableRemove = document.getElementById("arrivalTable");
    if (tables.style.display === "none") {
        tables.style.display = "block";
        tableHeader.style.display = "block";
        tableRemove.style.display = "none";
    } else {
        tables.style.display = 'none';
        tableHeader.style.display = "none";
    }
}

function arrivalClick() {
    var tables = document.getElementById("arrivalTable");
    var tableHeader = document.getElementById("tableHeader");
    var tableRemove = document.getElementById("departureTable");
    if (tables.style.display === "none") {
        tables.style.display = "block"
        tableHeader.style.display = "block";
        tableRemove.style.display = "none";
    } else {
        tables.style.display = 'none';
        tableHeader.style.display = "none";
    }
}