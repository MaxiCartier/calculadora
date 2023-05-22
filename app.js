const argv = require("process").argv;
const operacion = argv [2];
const numeroA = +argv [3];
const numeroB = +argv [4];
const calculadora = require("./operaciones/calculadora");
let resultado = 0;

if (operacion === "sumar"){
resultado = calculadora.sumar (numeroA, numeroB);
}else if(operacion === "restar"){
    resultado = calculadora.restar(numeroA, numeroB);
}else if (operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA, numeroB);
}else if (operacion === "dividir"){
    resultado = calculadora.dividir(numeroA, numeroB);
}else if(operacion === "raizCuadrada"){
    resultado = calculadora.raizCuadrada(numeroA);
}else if(operacion === "raizCubica"){
    resultado = calculadora.raizCubica(numeroA);
}else if(operacion === "potencia"){
    resultado = calculadora.potencia(numeroA, numeroB);
}else if (operacion === "porcentaje"){
    resultado = calculadora.porcentaje(numeroA, numeroB);
}
else{
    resultado = "SyntaxError"
}
console.log(`El resultado de ${operacion} ${numeroA} y ${numeroB} es ${resultado}`);
//comentario//