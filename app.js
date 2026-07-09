function mostrarFormulario(tipo){

    document.getElementById("enviar").classList.add("oculto");
    document.getElementById("viajar").classList.add("oculto");

    if(tipo==="envio"){
        document.getElementById("enviar").classList.remove("oculto");
        document.getElementById("enviar").scrollIntoView({behavior:"smooth"});
    }

    if(tipo==="viaje"){
        document.getElementById("viajar").classList.remove("oculto");
        document.getElementById("viajar").scrollIntoView({behavior:"smooth"});
    }

}
