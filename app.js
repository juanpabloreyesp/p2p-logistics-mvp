// Mostrar formularios

function mostrarFormulario(tipo){

    document.getElementById("viajar").classList.add("oculto");
    document.getElementById("envio").classList.add("oculto");

    if(tipo==="viaje"){

        document.getElementById("viajar").classList.remove("oculto");

        document.getElementById("viajar").scrollIntoView({
            behavior:"smooth"
        });

    }

    if(tipo==="envio"){

        document.getElementById("envio").classList.remove("oculto");

        document.getElementById("envio").scrollIntoView({
            behavior:"smooth"
        });

    }

}


// -----------------------------
// FORMULARIO VIAJE
// -----------------------------

document.getElementById("formViaje").addEventListener("submit",function(e){

    e.preventDefault();

    const origen=document.getElementById("vOrigen").value;
    const destino=document.getElementById("vDestino").value;
    const fecha=document.getElementById("vFecha").value;
    const espacio=document.getElementById("vEspacio").value;
    const telefono=document.getElementById("vWhatsapp").value;

    const mensaje=
`Hola.

Quiero ganar dinero con mi viaje.

🚗 Origen: ${origen}

📍 Destino: ${destino}

📅 Fecha: ${fecha}

📦 Espacio disponible: ${espacio}

📱 Mi WhatsApp: ${telefono}`;

    const url="https://wa.me/56943423780?text="+encodeURIComponent(mensaje);

    window.open(url,"_blank");

});


// -----------------------------
// FORMULARIO ENVÍO
// -----------------------------

document.getElementById("formEnvio").addEventListener("submit",function(e){

    e.preventDefault();

    const origen=document.getElementById("eOrigen").value;
    const destino=document.getElementById("eDestino").value;
    const objeto=document.getElementById("eObjeto").value;
    const fecha=document.getElementById("eFecha").value;
    const telefono=document.getElementById("eWhatsapp").value;

    const mensaje=
`Hola.

Necesito enviar algo.

📍 Origen: ${origen}

🏁 Destino: ${destino}

📦 Objeto: ${objeto}

📅 Fecha: ${fecha}

📱 Mi WhatsApp: ${telefono}`;

    const url="https://wa.me/56943423780?text="+encodeURIComponent(mensaje);

    window.open(url,"_blank");

});
