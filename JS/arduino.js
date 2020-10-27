function enviar() {
    var ip = f1.ip.value;

    document.getElementById("funciones").style.display="block";

    document.getElementById("abrir").href="http://"+ip+"/led=1";
    document.getElementById("cerrar").href="http://"+ip+"/led=0";
}