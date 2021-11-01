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