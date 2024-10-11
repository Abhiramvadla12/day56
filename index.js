let div = document.createElement('div');
        let url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true';
        fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then(data =>{
             div.innerHTML = `<h1>Current Weather</h1>
             <h2><span>Temperature</span> : ${data.current_weather['temperature']} ${data.current_weather_units['temperature']}
             <h2><span>Wind Speed</span>: ${data.current_weather['windspeed']} ${data.current_weather_units['windspeed']}
              <h2><span>Wind direction</span>: ${data.current_weather['winddirection']} ${data.current_weather_units['winddirection']}
                <h2><span>Weather code </span>: ${data.current_weather['weathercode']} ${data.current_weather_units['weathercode']}
                    <h2><span>Observation time</span>: ${new Date(data.current_weather['time']).toLocaleString()} ${data.current_weather_units['time']}  `
        }).catch((error)=>{ return console.error("error in fetching weather data:",error)});
        document.body.appendChild(div)