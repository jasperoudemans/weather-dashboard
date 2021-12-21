const APIKey = "c5a2aadd2ba954ccd8c6e99df9c362c9";

document.getElementById("searchBtn").addEventListener("click", fetchCity);

function fetchCity() {
  const city = document.getElementById("searchInput").value;
  var queryURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;

  fetch(queryURL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Didn't reach");
        return;
      }
    })
    .then((data) => {
      console.log(data);
      document.getElementById("temp").textContent = data.main.temp;
      document.getElementById("windSpeed").textContent = data.wind.speed;
      document.getElementById("humidity").textContent = data.main.humidity;
    });
}
