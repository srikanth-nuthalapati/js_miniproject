const container = document.querySelector(".container");
const search = document.querySelector(".box button");
const error404 = document.querySelector(".middle .error");
const middle = document.querySelector(".middle .act");


 async function start() {

    const city = document.querySelector(".box input").value.trim();
    if(city == '')
        alert('Please enter a city name');

        let Fetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`);
        let data = await Fetch.json();

        const image = document.querySelector(".weather-container img");
        const temperature = document.querySelector(".weather-container .temp");
        const description = document.querySelector(".weather-container .description");
        const humidity = document.querySelector(".humidity span");
        const wind = document.querySelector(".wind span");
        

        if(data.cod == "404"){
            container.style.height = "400px";
            error404.classList.add("active");
            middle.classList.remove("active");
            return;
        }

        container.style.height = "500px";
        error404.classList.remove("active");
        middle.classList.add("active");


        switch(data.weather[0].main){
            case "Clear":
                image.src = "clear.png";
                break;
            case "Clouds":
                image.src = "cloud.png";
                break;
            case "Mist":
                image.src = "mist.png";
                break;
            case "Haze":
                image.src = "mist.png";
                break;
            case "Rainy":
                image.src = "rain.png";
                break;
            case "Snow":
                image.src = "snow.png";
                break;
            default:
                image.src = "cloud.png";
        }
        
        temperature.innerHTML = `${parseInt(data.main.temp)} <span>°C</span>`;
        description.innerHTML =  `${data.weather[0].description}`;
        humidity.innerHTML = `${parseInt(data.main.humidity)}% `;
        wind.innerHTML  = `${parseInt(data.main.pressure)}km/h`;

}

