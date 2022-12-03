
//ventana modal INICIAR SESION

let cerrar = document.querySelectorAll(".modal-modal-close")[0];
let abrir = document.querySelectorAll(".btn-boton-abrir ")[0];

let modalC = document.querySelectorAll(".container-model")[0];

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("btn-boton-abrir");
});

cerrar.addEventListener("click", function(){
    modalC.style.opacity = "0";
    modalC.style.visibility = "hidden";
    modalC.classList.toggle("modal-modal-close");
    
});

