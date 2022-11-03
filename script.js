document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchinput").value;

  if (input != "") {
    warning("carregando....");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=4b740d4c82089a8996d57a9c2c44223a`;

    let result = await fetch(url);
    let json = await result.json();

    if (json.cod == 200) {
      showinfo({
        name: json.name,
        contry: json.sys.country,
        temp: json.main.temp,
        tempIcon: json.weather[0].icon,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      warning("Não enconteri essa localização");
    }
  }
});

function warning(msg) {
  document.querySelector(".aviso").innerHTML = msg;
}

function showinfo(json) {
  warning = "";
  document.querySelector(".titulo").innerHTML = `${json.name},${json.country}`;
}
