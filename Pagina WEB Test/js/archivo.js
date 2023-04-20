a = 123.4;
b = 456;
c = a+b;
texto = "Hola Mundo";
console.log("El Resultado es :",c);
console.warn("El resultado es :",c);
console.error("El resultado es :",c);
console.info("El resultado es :",c);
console.info("El resultado es :",texto);
//lavariable =document.getElementById("brand-name")
//lavariable.innerHTML = "Hola Mundo";
arreglos =[3,4,5,6,7,"abc","def"];
console.log(arreglos[5]);
diccionario = {"nombre":"juan",  "apellido":"perez"} 
console.log(diccionario.nombre);
console.log(diccionario.apellido);
basedatos = [
    {
    "nombre":"juan", "apellido":"perez"
    } ,
    {
    "nombre":"juan", "apellido":"soto"
    }
];
console.error(basedatos[0].nombre);
for(i=0;i<basedatos.length;i++){
    console.warn(basedatos[i].nombre);
}
for(var elemento of basedatos){
    console.log(elemento.nombre);
}                                
console.log(basedatos);
basedatos.forEach(element => {
    console.log(elemento.apellido);
});
z=0;
while(z<basedatos.length)
{

    z++;

}

//Tarea:
/*
1.- crear una variable llamada base de datos que contenga en listado de 10 productos. (id,nombreproducto,cantidad,precio,ima)

*/