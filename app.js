// Nav Bar

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
