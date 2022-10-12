let aeroGlobal = 0
let aerolineas = [
    {nombre:"Aerolineas Argentinas", naves:[
        {nombre: "Nave 1",
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
    },{
        nombre: "Nave 3",
        tara:6,
        peso:6,
        año:1999,
        cantPasj: 2000,
        velocidadMax: 1900,
        img:"img/ERJ145.JPG"
    }]}
    ,
    {nombre:"Fly Bondi", naves:[
        {
            nombre: "Nave 1",
            tara:3,
            peso:3,
            año:2001,
            cantPasj: 1000,
            velocidadMax: 2700,
            img:"img/A320_R.jpg"
        }
    ]}
    ,
    {nombre: "Aero 3", naves:[{
        nombre: "Nave 1",
        tara:3,
        peso:3,
        año:2001,
        cantPasj: 1000,
        velocidadMax: 2700,
        img:"img/B737-100_0.jpg"
    }]}
    ,
    {nombre:"Aero 4", naves:[
        {
            nombre: "Nave 1",
            tara:3,
            peso:3,
            año:2001,
            cantPasj: 1000,
            velocidadMax: 2700,
            img:"img/E90-100.jpg"
        }

    ]}
]



/* {
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
},] */

function cambioDeAerolinea(aero){
    aeroGlobal = aero
    let containerNaves =  document.querySelector('.aerolineas')
    let aeroTitle = document.querySelector('.aero-title')
    let boton = document.getElementById('Aero ' + aero)
    

  

    
    containerNaves.innerHTML =`
     <section class="container"><h2 class="tx-c">${aerolineas[aero].nombre}</h3></section>
     <section class="container flex cl card naves">
         <section class="card-header"><h3>${aerolineas[aero].naves[0].nombre}</h3></section>
         <section class="card-img"><img src=${aerolineas[aero].naves[0].img} alt=""></section>
         <section class="card-info flex cl">
             <h3>INFO</h3>
             <h4>Tara: ${aerolineas[aero].naves[0].tara}</h4>
             <h4>Peso: ${aerolineas[aero].naves[0].peso} kg</h4>
             <h4>Año: ${aerolineas[aero].naves[0].año}</h4>
             <h4>Pasajeros: ${aerolineas[aero].naves[0].cantPasj}</h4>
             <h4>Velocidad max.: ${aerolineas[aero].naves[0].velocidadMax} km/h</h4>
         </section>
     </section>
     <section class="container flex border">
     <ul class="navesBotones flex">
         
     </ul>

     </section>
     
 
     `
     
     let navesBotones = document.querySelector('.navesBotones')
     let contenido = aerolineas[aero].naves.map((nave, i)=>`
     <a  onclick=cambioDeNave(${i}) href="#naves"><li id="nave ${i}">${nave.nombre}</li></a> `
    ).join('')
    
    navesBotones.innerHTML = contenido
    containerNaves.focus();

    
    for(let i=0; i< aerolineas.length;i++){
        if(i!=aero){
        let boton = document.getElementById('Aero ' + i);
        boton.className="none"
        }
    }
    boton.className="btn-nave"

    let botonNave = document.getElementById('nave ' + 0);
    botonNave.className="btn-nave"

}



function cambioDeNave(nave){
   let containerNaves =  document.querySelector('.naves')
   let boton = document.getElementById('nave ' + nave)
   
   containerNaves.innerHTML =`

    
        <section class="card-header"><h3>${aerolineas[aeroGlobal].naves[nave].nombre}</h3></section>
        <section class="card-img"><img src=${aerolineas[aeroGlobal].naves[nave].img} alt=""></section>
        <section class="card-info flex cl">
            <h3>INFO</h3>
            <h4>Tara: ${aerolineas[aeroGlobal].naves[nave].tara}</h4>
            <h4>Peso: ${aerolineas[aeroGlobal].naves[nave].peso} kg</h4>
            <h4>Año: ${aerolineas[aeroGlobal].naves[nave].año}</h4>
            <h4>Pasajeros: ${aerolineas[aeroGlobal].naves[nave].cantPasj}</h4>
            <h4>Velocidad max.: ${aerolineas[aeroGlobal].naves[nave].velocidadMax} km/h</h4>
        </section>
    
    

`
containerNaves.focus();
for(let i=0; i< aerolineas[aeroGlobal].naves.length;i++){
    if(i!=nave){
    let boton = document.getElementById('nave ' + i);
    boton.className="none"
    }
}
boton.className="btn-nave"
}