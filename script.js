apikey="c5944d22ff556cb504c50cd1e378c0df"
host="https://api.openweathermap.org/data/2.5/weather?q=Chandigarh&units=metric&appid=c5944d22ff556cb504c50cd1e378c0df"

const getWeather = (city) => {
	fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&units=metric&appid=" + apikey)
		.then(response => response.json())
		.then(data => {displayWeather(data)})


		.catch(err => console.error(err));
}

const displayWeather = (data) => {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
    document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    // to remove the loading class from it
    document.querySelector(".weather").classList.remove("loading");
}
const search = () => {
    getWeather(document.querySelector(".search-bar").value);
  }

document.querySelector(".bt").addEventListener("click", (e) => {
	e.preventDefault()
    getWeather(document.querySelector(".search-bar").value);
});
document.getElementById("btn1").addEventListener("click", (e) => {
	e.preventDefault()
    getWeather(document.getElementById("btn1").innerText);
});
document.getElementById("btn2").addEventListener("click", (e) => {
	e.preventDefault()
    getWeather(document.getElementById("btn2").innerText);
});
document.getElementById("btn3").addEventListener("click", (e) => {
	e.preventDefault()
    getWeather(document.getElementById("btn3").innerText);
});
getWeather("delhi");


