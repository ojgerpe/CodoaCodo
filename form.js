
// Listen for a submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let val_alert= document.querySelector(".telefono")
  

  //   Get input Values
  let name = document.querySelector(".nombre").value;
  let sex = document.querySelector(".sexo").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".telefono").value;
  let country = document.querySelector(".Country").value;
  let asunto = document.querySelector(".asunto").value;
  let message = document.querySelector(".mensaje").value;
  
  // imprimo al log para testeo
  console.log(name);
  console.log(sexo);
  console.log(email);
  console.log(phone);
  console.log(country);
  console.log(asunto);
  console.log(message);
  
  let validacion = validateForm(phone);
  if(validacion){
    document.contactForm.submit();
    //sendEmail(name, email, asunto,message,phone);   //este metodo ya no se utiliza
  } else {
    alert("telefono invalido");
    val_alert.classList.add('alert');
    val_alert.focus();
    return;
  }
}

// Esta función valida si el numero telefonico ingresado es válido o no
// y devuelve true o false respectivamente.
function validateForm(phone) {
  let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let validacion = re.test(phone);
  console.log(`${phone}`);
  console.log(`${validacion}`)
  return validacion
}

/*ya no se utiliza este metodo.

  function sendEmail(name,email,asunto,message,phone){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "g4.cac.fsd@gmail.com",
    Password: "quvrseissiwqnnni",
    To:`${email}`,
    From:"g4.cac.fsd@gmail.com",
    Subject:`${asunto}`,
    Body:`${name}, nos dejaste el siguiente mensaje: <br/>
    ${message}<br/>
    te estaremos contactando al teléfono:${phone}<br/>
    saludos<br/>
    grupo 4`
  }).then(message => alert("correo enviado con exito"))
};*/