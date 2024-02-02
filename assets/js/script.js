const apiKey = "6014629f32513c217c666a6e32250f07";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchbox = document.querySelector(".search input")
        const searchBtn = document.querySelector(".search button")
        const weatherIcon = document.querySelector(".weather-icon")

        async function checkWeather(city) { 
            const response = await fetch(apiURL + city + `&appid=${apiKey}`);

            if (response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            } else {

            var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            
            if (data.weather[0].main == "Clouds"){
                weatherIcon.src = "assets/images/clouds.png"
                } 
            else if (data.weather[0].main == "Clear"){
                weatherIcon.src = "assets/images/clear.png"
                }
            else if (data.weather[0].main == "Rain"){
                weatherIcon.src = "assets/images/rain.png"
                }
            else if (data.weather[0].main == "Drizzle"){
                weatherIcon.src = "assets/images/drizzle.png"
                }
            else if (data.weather[0].main == "Mist"){
                weatherIcon.src = "assets/images/mist.png"
                }

            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }
        }

        searchBtn.addEventListener("click",()=>{
            checkWeather(searchbox.value);
        })

        let input = document.querySelector("input");
        input.addEventListener('keyup', (e)=> {
            if (e.keyCode === 13) {
                checkWeather(searchbox.value);
            }
        })