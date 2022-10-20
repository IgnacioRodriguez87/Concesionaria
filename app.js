/*$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});*/
/*
(function()
  {
    var formulario = document.getElementsByName('formulario')[0],
                elementos = formulario.elements,
                boton = document.getElementById('btn');

	if (formulario.nombre.value == 0)
	{
		alert("Completa el campo nombre");
		e.preventDefault();
	}
	if(formulario.telefono.value == isNaN)
	{
		alert("Ingrese un telefono valido");
		e.preventDefault();
	}
	if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(formulario.mail.value)))
	{
		alert("Ingrese un mail valido");
		e.preventDefault();
	}
	if(formulario.desde.value > formulario.hasta.value)
	{
		alert("Indique un horario valido");
		e.preventDefault();
	}
    if (formulario.checkbox1.checked == false && formulario.checkbox2.checked == false && formulario.checkbox3.checked == false && formulario.checkbox4.checked == false)
    {
        alert("Indique al menos una operacion a realizar");
        e.preventDefault();
      }
    if (formulario.optradio[0].checked == true ||formulario.optradio[1].checked == true||formulario.optradio[2].checked == true || 
          formulario.optradio[3].checked == true)
    {

    }
	else
	{
		alert("Indique como fue que nos conocio");
		e.preventDefault();
	}
    /*var validar = function(e)
    {
      validarNombre(e);
      validarTelefono(e);
      validarMail(e);
      validarRadio(e);
      validarCheckbox(e);
    };  

    formulario.addEventListener("submit", validar);
  }
());*/
(function(){
	//Variables
	var formulario = document.getElementsByName('formulario')[0],
		elementos = formulario.elements,
		boton = document.getElementById('btn');

	var validarNombre = function(e){
		if (formulario.nombre.value == 0){
			alert("Completa el campo nombre");
			e.preventDefault();
			//https://www.w3schools.com/jsref/event_preventdefault.asp
			//Evita que un enlace abra la URL
		}
	};

	var validarRadio = function(e){
		if (formulario.sexo[0].checked == true || 
			formulario.sexo[1].checked == true){
		} else{
			alert("Completa el campo sexo");
			e.preventDefault();
		}
	};
	
	var validarCheckbox = function(e){
		if (formulario.terminos.checked == false){
			alert("Acepta los términos y condiciones");
			e.preventDefault();
		}
	};

	var validar = function(e){
		validarNombre(e);
		validarRadio(e);
		validarCheckbox(e);
	};
	formulario.addEventListener("submit", validar);
}())