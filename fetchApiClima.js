function clima(){

  const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
  const ciudad =prompt("Ciudad")
  
  
    
      //Llamado a la API del clima
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const dataCiudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            console.log(dataCiudad);
            document.getElementById('nombre').innerHTML=dataCiudad.name
          } else {
            alert("Ciudad no encontrada");
          }
        });
  
  


}  
/* 
function cambiarTexto(){
  document.querySelector(".aside2").textContent=
}
 */