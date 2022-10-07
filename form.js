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


/*
document.addEventListener('DOMContentLoaded', function() {
  // init
  let cookiesBanner = document.querySelector('.cookies-banner')
  let cookiesBannerCloseButton = document.querySelector('.cookies-banner-button .button')
  let cookiesBannerDelay = 2000

  if (cookiesBanner) {
      setTimeout(showBanner, cookiesBannerDelay);
  }

  // events
  if (cookiesBannerCloseButton) {
      cookiesBannerCloseButton.addEventListener('click', cookiesBannerCloseButtonClicked)
  }

  // functions
  function cookiesBannerCloseButtonClicked(e) {
      e.preventDefault()
      hideBanner()
  }
  function showBanner() {
      cookiesBanner.classList.add('show')
  }
  function hideBanner() {
      cookiesBanner.classList.remove('show')
  }
})









function validateForm() {
  let fname = document.myForm.fname.value;
  let lname = document.myForm.lname.value;
  if (fname==null || fname=="") {
    alert("Debe completarse el campo de nombre");
    return false;
  }
  if (lname==null || lname=="") {
    alert("Debe completarse el campo de apellido");
    return false;
  }


function validateForm($tel) {
  $re = '/^(?:((?P<p1>(?:\( ?)?+)(?:\+|00)?(54)(?<p2>(?: ?\))?+)(?P<sep>(?:[-.]| (?:[-.] )?)?+)(?:(?&p1)(9)(?&p2)(?&sep))?|(?&p1)(0)(?&p2)(?&sep))?+(?&p1)(11|([23]\d{2}(\d)??|(?(-10)(?(-5)(?!)|[68]\d{2})|(?!))))(?&p2)(?&sep)(?(-5)|(?&p1)(15)(?&p2)(?&sep))?(?:([3-6])(?&sep)|([12789]))(\d(?(-5)|\d(?(-6)|\d)))(?&sep)(\d{4})|(1\d{2}|911))$/D';
  if (preg_match($re,$tel,$match)) {
    console.log("True");
    return true;
  }
  alert("No corresponde a un número de télefono válido de Argentina");
  console.log("False");
  return false;
  console.log($tel)
  console.log("hola")
}
*/