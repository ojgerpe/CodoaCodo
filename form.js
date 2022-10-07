// Listen for a submit
document.querySelector(".contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".nombre").value;
  //let sex = document.querySelector(".sexo").value;
  let email = document.querySelector(".email").value;
  let phone = document.querySelector(".telefono").value;
  let country = document.querySelector(".Country").value;
  let asunto = document.querySelector(".asunto").value;
  let message = document.querySelector(".mensaje").value;
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(country);
  console.log(asunto);
  console.log(message);
  
  validateForm(phone);
  sendEmail(name, email, asunto,message,phone);

  //document.querySelector(".contactForm").reset();
}


function sendEmail(name,email,asunto,message,phone){
  Email.send({
    Host: "smtp.freesmtpservers.com",
    Port: "25",
    Auth: "None",
    //Username: "g4.cac.fsd@gmail.com",
    //Password: "CAC_grupo4",
    To:`${email}`,
    From:"g4.cac.fsd@gmail.com",
    Subject:`${asunto}`,
    Body:`${name}, nos dejaste el siguiente mensaje: <br/>
    ${message}<br/>
    te estaremos contactando al teléfono:${phone}<br/>
    saludos<br/>
    grupo 4`
  }).then(message => alert("correo enviado con exito"))
};

function validateForm(phone) {
  let re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  let validacion = re.test(phone);
  console.log(`${phone}`);
  console.log(`${validacion}`)
  return validacion
}
