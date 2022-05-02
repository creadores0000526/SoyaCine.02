var formulario = document.getElementById('formulario');
var alert = document.getElementById('alert');

formulario.addEventListener('submit',function(e){
     
     e.preventDefault();

	 let nombre = document.getElementById("nombre").value;
	 let gmail = document.getElementById("gmail").value;
	 let mensaje = document.getElementById("mensaje").value;

	 const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


	 if(nombre == ""){
		
		alertFormulario('Verifica que el campo "Nombre" no este vacío.');
	 }else if(!expr.test(gmail)){
		
		alertFormulario('La dirección de email es incorrecta.');
	 }else if(mensaje == ""){

		alertFormulario('Verifica que el campo "mensaje" no este vacío.');
	 }else{
		alertFormulario('¡Gracias! Pronto nos contactaremos contigo');
		formulario.reset();
	 };

	 function alertFormulario(textAlert){
	 	document.getElementById('alertFormulario').style.display = "block";
	 	document.getElementById('textAlert').innerHTML = textAlert;
	 	setTimeout(function(){
	 		document.getElementById('alertFormulario').style.display = "none";
		}, 3000);
	 };

});