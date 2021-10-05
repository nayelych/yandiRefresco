function ingresar()
{

var usuario="yandi"
var contraseña="examen";

if (document.frmingreso.txtusuario.value==usuario && 
    document.frmingreso.txtcontraseña.value==contraseña)


{

    document.location="inicio.html"
}

else


{

    alert("ingrese usuario y contraseña correctamente")
}


}









