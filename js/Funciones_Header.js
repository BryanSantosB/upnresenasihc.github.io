// Lógica para el Menú del header
const checkHeader = document.getElementById("menuCheck");
const opciones = document.getElementById("opcionesDiv");

function comprobarCheck(){ //Función para comprobar check y ocultar/mostrar opcionesDiv
  if(this.checked){
    opciones.style.display = "block";
  }else{
    opciones.style.display = "none";
  }
}

checkHeader.addEventListener("change", comprobarCheck);


// Descarmar Check 
window.addEventListener('load', function() { //Evento al cargar página

  function desmarcarCheckbox() {
      if (window.innerWidth > 900) {
          checkHeader.checked = false;
          comprobarCheck();
      }
  }
  
  this.addEventListener('resize', desmarcarCheckbox); //Evento al redimensionar página
  desmarcarCheckbox();
});