let naves = [{
    nombre: "Nave 1",
    tara:1,
    peso:1,
    año:"2111",
    cantPasj: 1000,
    velocidadMax: 3000,
    img:"img/737.JPG"
},{
    nombre: "Nave 2",
    tara:2,
    peso:2,
    año:2,
    cantPasj: 900,
    velocidadMax: 2300,
    img:"img/A320_R.jpg"
},
{
    nombre: "Nave 3",
    tara:3,
    peso:3,
    año:2001,
    cantPasj: 1000,
    velocidadMax: 2700,
    img:"img/A320_R.jpg"
},
{
    nombre: "Nave 4",
    tara:3,
    peso:3,
    año:2001,
    cantPasj: 1000,
    velocidadMax: 2700,
    img:"img/B737-100_0.jpg"
},
{
    nombre: "Nave 5",
    tara:3,
    peso:3,
    año:2001,
    cantPasj: 1000,
    velocidadMax: 2700,
    img:"img/E90-100.jpg"
},
{
    nombre: "Nave 6",
    tara:6,
    peso:6,
    año:1999,
    cantPasj: 2000,
    velocidadMax: 1900,
    img:"img/ERJ145.JPG"
},
{
    nombre: "Nave 7",
    tara:7,
    peso:7,
    año:1996,
    cantPasj: 500,
    velocidadMax: 1200,
    img:"img/MAX-100_1.jpg"
},]



function cambioDeNave(nave){
   let containerNaves =  document.querySelector('.naves')
   let boton = document.getElementById('nave ' + nave)
   
   containerNaves.innerHTML =`

    <section class="container flex cl card">
        <section class="card-header"><h3>${naves[nave].nombre}</h3></section>
        <section class="card-img"><img src=${naves[nave].img} alt=""></section>
        <section class="card-info flex cl">
            <h3>INFO</h3>
            <h4>Tara: ${naves[nave].tara}</h4>
            <h4>Peso: ${naves[nave].peso} kg</h4>
            <h4>Año: ${naves[nave].año}</h4>
            <h4>Pasajeros: ${naves[nave].cantPasj}</h4>
            <h4>Velocidad max.: ${naves[nave].velocidadMax} km/h</h4>
        </section>
    </section>
    

`
containerNaves.focus();
for(let i=0; i< naves.length;i++){
    if(i!=naves){
    let boton = document.getElementById('nave ' + i);
    boton.className="none"
    }
}
boton.className="btn-nave"
}