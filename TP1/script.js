function cambiaValor() {
    var valor = document.getElementById("cmbSeguro").value;
    switch (valor) { 
        case "Seleccionar": 
            x = "Debe seleccionar un tipo de seguro para saber su valor.";
            break;
        case "Basico": 
            x = "El valor es: " + 500;
            break; 
        case "Intermedio": 
            x = "El valor es: " + 1000;
            break; 
        case "Premium": 
            x = "El valor es: " + 1500;
            break; 
    }
    document.getElementById("lblImporte").innerHTML = x;
}

function enviar() {
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var dni = document.getElementById("txtDNI").value;
    var email = document.getElementById("txtMail").value;
    var telefono = document.getElementById("txtTelefono").value;

    if (nombre == "" || apellido == "" || dni == "" || email == "" || telefono == "") {
        alert("Debe completar todos los campos obligatorios");
    }
    else {
        alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nDNI: " + dni + "\nEmail: " + email + "\nTeléfono: " + telefono);
    }

    if(nombre == ""){
        document.getElementById("NombreError").innerHTML = "Debe completar el nombre";
    }else{
        document.getElementById("NombreError").innerHTML = "";
    }
    if(apellido == ""){
        document.getElementById("ApellidoError").innerHTML = "Debe completar el apellido";
    }else{
        document.getElementById("ApellidoError").innerHTML = "";
    }
    if(dni == ""){
        document.getElementById("DniError").innerHTML = "Debe completar el dni";
    }else{
        document.getElementById("DniError").innerHTML = "";
    }
    if(email == ""){
        document.getElementById("MailError").innerHTML = "Debe completar el email";
    }else{
        document.getElementById("MailError").innerHTML = "";
    }
    if(telefono == ""){
        document.getElementById("TelefonoError").innerHTML = "Debe completar el telefono";
    }else{
        document.getElementById("TelefonoError").innerHTML = "";
    }
}