


  function desplegarFormulario(){
   

		//llamar elementos principales
    let Header = document.querySelector("header");
    let Main = document.querySelector("main");
    let Footer = document.querySelector("footer");
    

		//Ocultar elementos principales
    Header.style.display="none";
    Main.style.display="none";
    Footer.style.display="none";



		//llamar formulario desplegable
    let Formulario = document.querySelector(".boxFormularioEmergente");

		//desplegar formulario
    Formulario.style.display="flex";
    Formulario.style.justifyContent="center";
    Formulario.style.alignItems="center";
    Formulario.style.flexDirection="column";
    
    //animacion suave
    Formulario.classList.add("transition", "duration-700", "ease-in-out");
    


		//llamando boton de salir
    let Salir = document.querySelector(".salir");

		
		//activando boton de salir
		Salir.addEventListener("click", OcultalFormulario, false);
  }






  function OcultalFormulario(){


		//llamar formulario desplegable
    let Formulario = document.querySelector(".boxFormularioEmergente");

		//ocultar formulario desplegable
    Formulario.style.display="none";




		//llamar elementos principales
    let Header = document.querySelector("header");
    let Main = document.querySelector("main");
    let Footer = document.querySelector("footer");
    

		//Ocultar elementos principales
    Header.style.display="flex";
    Main.style.display="block";
    Footer.style.display="block";
	}




  document.querySelector(".formularioReservacion").addEventListener("submit", function(e){
    e.preventDefault(); // prevenir envío real
    
    
    alert("¡Tu reserva ha sido enviada con éxito! Gracias por elegir El Refugio.");
    
    OcultalFormulario();
    
  });