document.myForm.addEventListener('submit', function (e) {
  // prevent the form from submitting
  e.preventDefault();

});

/*function validateForm() {
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
}*/

function validateForm($tel) {
  /*$re = '/^(?:((?P<p1>(?:\( ?)?+)(?:\+|00)?(54)(?<p2>(?: ?\))?+)(?P<sep>(?:[-.]| (?:[-.] )?)?+)(?:(?&p1)(9)(?&p2)(?&sep))?|(?&p1)(0)(?&p2)(?&sep))?+(?&p1)(11|([23]\d{2}(\d)??|(?(-10)(?(-5)(?!)|[68]\d{2})|(?!))))(?&p2)(?&sep)(?(-5)|(?&p1)(15)(?&p2)(?&sep))?(?:([3-6])(?&sep)|([12789]))(\d(?(-5)|\d(?(-6)|\d)))(?&sep)(\d{4})|(1\d{2}|911))$/D';
  if (preg_match($re,$tel,$match)) {
    console.log("True");
    return true;
  }
  alert("No corresponde a un número de télefono válido de Argentina");
  console.log("False");
  return false;*/
  console.log($tel)
}
