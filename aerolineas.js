let aeroGlobal = 0
let aerolineas = [
    {nombre:"Aerolineas Argentinas", naves:[
        {nombre: "Embraer",
        modelo:190,
        cant:26,
        /* tara:1,
        peso:1,
        año:"2111",
        cantPasj: 1000,
        velocidadMax: 3000, */
        img:"img/E90-100.jpg"
    },{
        nombre: "Boeing 737-700",
        modelo:"737.700",
        cant:8,
        img:"img/A320_R.jpg"
    },{
        nombre: "Boeing 737-800",
        modelo:"737_800",
        cant: 31,
        img:"img/A320_R.jpg"
    },{
        nombre: "Boeing 737 Max 8",
        modelo:"737 Max 8",
        cant: 5,
        img:"img/ERJ145.JPG"}]}
    ,
    {nombre:"Fly Bondi", naves:[
        {
            nombre: "Boeing",
            modelo:"737 800 N",
            cant: 7,
            img:"img/737.JPG"
        }
    ]}
    ,
    {nombre: "JetSmart", naves:[{
        nombre: "Airbus",
        modelo:"320 CEO",
        cant: 8,
        img:"img/B737-100_0.jpg"
    }]}
    ,
    {nombre:"Alas", naves:[
        {
            nombre: "Embraer",
            modelo:"ERJ-145",
            cant: 1,
            img:"img/ERJ145.JPG"
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
         <section class="card-header"><h3 class="sub-title">${aerolineas[aero].naves[0].nombre}</h3></section>
         <section class="card-img"><img src=${aerolineas[aero].naves[0].img} alt=""></section>
         <section class="card-info flex cl">
             <h3>INFO</h3>
             <h4>Modelo: ${aerolineas[aero].naves[0].modelo}</h4>
             <h4>Catidad: ${aerolineas[aero].naves[0].cant}</h4>
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

    
        <section class="card-header"><h3 class="sub-title">${aerolineas[aeroGlobal].naves[nave].nombre}</h3></section>
        <section class="card-img"><img src=${aerolineas[aeroGlobal].naves[nave].img} alt=""></section>
        <section class="card-info flex cl">
            <h3>INFO</h3>
            <h4>Modelo: ${aerolineas[aeroGlobal].naves[nave].modelo}</h4>
            <h4>Cantidad: ${aerolineas[aeroGlobal].naves[nave].cant}</h4>
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