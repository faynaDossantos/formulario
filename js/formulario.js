const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario__input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,8}$/, // 4 a 8 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,	
}

const campos = {
	nombre: false,
	Email: false,
	password: false,
	Password2: false,

}

const validarFormulario= (e) => {
	switch (e.target.name){
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre' );
		break;

		case "Email":
			validarCampo(expresiones.Email, e.target, 'Email' );
		break;

		case "password":
			validarCampo(expresiones.password, e.target, 'password' );
		break;

		case "password2":
			validarPassword2();
		break;
	} 

}
const validarCampo = (expresion, input, campo) => {
if(expresiones.nombre.test(e.target.valuee)){
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto ')
	document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto ')
	document.querySelector(`#grupo__${campo} i `).classList.add(' fa-check-circle')
	document.querySelector(`#grupo__${campo} i`).classList.remove(' fa-circle-exclamation')
	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove(' formulario__input-error-activo')
	campos[campo]=true
} else{
	document.getElementById(`grupo__${campo}`).classLista.add('formulario__grupo-incorrecto')
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto ')
	document.querySelector(`#grupo__${campo} i `).classList.add('fa-circle-exclamation ')
	document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle ')
	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add(' formulario__input-error-activo')
	campos[campo]=false
}
}

validarPassword2= () =>{
const inputPassword1 = document.getElementById('password');
const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !==inputPassword2.value){
	
		document.getElementById(`grupo__password2`).classLista.add('formulario__grupo-incorrecto')
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto ')
		document.querySelector(`#grupo__password2 i `).classList.add('fa-circle-exclamation ')
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle ')
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add(' formulario__input-error-activo')
		campos[password]=false

		 } else{
			document.getElementById(`grupo__${campo}`).classLista.add('formulario__grupo-incorrecto')
			document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto ')
			document.querySelector(`#grupo__${campo} i `).classList.add('fa-circle-exclamation ')
			document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle ')
			document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add(' formulario__input-error-activo')
			campos[password]=true
		}
}



inputs.forEach((input) =>{
	input.addEventListener('keyup', validarFormulario );
	input.addEventListener('blur', validarFormulario );
		
	});

formulario.addEventListener('submit',(e) =>{
	e.preventDefault();

if(campos.nombre&& campos.Email&& campos.password&& campos.Password2){
	formulario.onreset();
}
})