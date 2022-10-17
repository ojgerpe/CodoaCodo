window.addEventListener('load', () =>{    
    
        const inputVal =prompt("Ciudad")
        
        const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang=sp`;

        let tempvalor = document.getElementById('temp_valor')
        let tempdescrip = document.getElementById('temp_descrip')
        
        let ubicacion = document.getElementById('ubicacion')
        let iconoimg = document.getElementById('icono_img')

        let vientovel = document.getElementById('viento_vel')


        fetch (url) 
            .then (respuesta => respuesta.json())
            .then(data => MostrarData(data))
            .catch(error => console.log(error))

        const MostrarData = (data) => {
            console.log("Ciudad:", data.name)
            console.log("Temperatura actual:",  Math.ceil(data.main.temp))
            console.log("Temperatura Minima:", Math.ceil(data.main.temp_min))
            console.log("Temperatura Màxima:", Math.ceil(data.main.temp_max))
            console.log("Presiòn:", data.main.pressure)
            console.log("Hùmedad:", data.main.humidity) 
            console.log("Estado:", data.weather[0].description)
            console.log(data.weather[0].icon)
            console.log(data.weather[0].main)
            
            let temp = Math.round(data.main.temp)
            tempvalor.textContent = `${temp} ºC`

            let desc = data.weather[0].description
            tempdescrip.textContent = desc
            
            let ubi = data.name
            ubicacion.textContent = ubi

            let vel = data.wind.speed
            vientovel.textContent = `${vel} m/s`

            //iconos staticos
            //let cod_icon = data.weather[0].icon
            //const uri_ico = `http://openweathermap.org/img/wn/${cod_icon}.png`

            //iconos animados
            switch (data.weather[0].main){
                case 'Clear':
                iconoimg.src = `icon/animated/day.svg` 
                break;
                case 'Clouds':
                iconoimg.src = `icon/animated/cloudy-day-1.svg` 
                break;
            }
        } 
    }
)