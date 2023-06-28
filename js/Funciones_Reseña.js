function irReseña(){
    window.location.href = "reseña.html";
}

function irOpinion(){
    window.location.href = "opinion.html";
}

function verCajaComentario(){
    document.getElementById("cajaComentario").style.display = "block";
}

function noVerCajaComentario(){
    document.getElementById("cajaComentario").style.display = "none";
    document.getElementById("comentario").value = "";
}

