// Nav Bar

document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL
  var currentPage = window.location.pathname.split("/").pop();
  console.log(currentPage)

  // Check and apply 'active' class
  if (currentPage === "index.html") {
    document.getElementById("navHome").classList.add("active");
  } else if (currentPage === "browse.html") {
    document.getElementById("navBrowse").classList.add("active");
  } else if (currentPage === "about.html") {
    document.getElementById("navAbout").classList.add("active");
  } else if (currentPage === "contact.html") {
    document.getElementById("navContact").classList.add("active");
  }
});

// Filter on browse

function searchCars() {
  filterCars();
}

function filterCars() {
  var searchTerm = document.getElementById("searchBox").value.toLowerCase();
  var selectedMake = document.getElementById("carMake").value.toLowerCase();
  var selectedYear = document.getElementById("carYear").value.toLowerCase();
  var cars = document.querySelectorAll(".car-item");

  cars.forEach(function (car) {
    var carText = car.textContent.toLowerCase();
    var matchesSearch = searchTerm === "" || carText.includes(searchTerm);
    var matchesMake = selectedMake === "" || carText.includes(selectedMake);
    var matchesYear = selectedYear === "" || carText.includes(selectedYear);

    if (matchesSearch && matchesMake && matchesYear) {
      car.style.display = "";
    } else {
      car.style.display = "none";
    }
  });
}

function filterItems(term) {
  var cars = document.querySelectorAll(".car-item");

  cars.forEach(function (car) {
    var carText = car.textContent.toLowerCase();
    if (carText.includes(term.toLowerCase())) {
      car.style.display = "";
    } else {
      car.style.display = "none";
    }
  });
}
