function mueveReloj(){
    var momentoActual = new Date()
    var hora = momentoActual.getHours()
    var minuto = momentoActual.getMinutes()
    var segundo = momentoActual.getSeconds()
    
    var str_segundo = new String (segundo)
    if (str_segundo.length == 1)
        segundo = "0" + segundo
    
    var str_minuto = new String (minuto)
    if (str_minuto.length == 1)
        minuto = "0" + minuto
    
    var str_hora = new String (hora)
    if (str_hora.length == 1)
        hora = "0" + hora
    
    var horaImprimible = hora + " : " + minuto + " : " + segundo
    
    document.form_reloj.reloj.value = horaImprimible
    
    setTimeout("mueveReloj()",1000)
    
}
//funcion para mostrar el reloj 
function muestraReloj(){
    document.write("La hora es")
    document.write("<form name='form_reloj' onload='mueveReloj()'>")
    document.write("<input type='text' name='reloj' size='10' value='00 : 00 : 00' readonly>")
    document.write("</form>")
    mueveReloj()
}