// Convertidor de temperatura

// Declara la función celsiusAFahrenheit la cual deberá tener como parámetro la temperatura a calcular.
// Dentro de la función convierte la temperatura ingresada de celsius a fahrenheit y retorna una frase como:
//         “NN°C son NN°F”
// Donde el primer valor NN son los grados ingresados como párametro y el segundo valor NN es la conversión mencionada.

// function celsiusAFahrenheit (temperatura){
//     let temperaturaConverite = temperatura * 1.8 + 32

//     return temperatura + 'ºC son ' + temperaturaConverite + 'ºFF'
// }

// console.log(celsiusAFahrenheit(28));


let celsiusAFahrenheit = (temperatura) => {
    let temperaturaConverite = temperatura * 1.8 +32;
    return temperatura + 'ºC son ' + temperaturaConverite + 'ºFF'
}


console.log(celsiusAFahrenheit(28));




// condicionales
// Traductor Mundial
// Para este ejercicio en el inicio de tu código tienes que definir una variable idioma que puede contener el texto “en”, el texto “es” ,”de” o “fr”. 

// Para probar el ejercicio vas a ir modificando ese valor y el resultado deberá ser diferente dependiendo de esa variable.

// El resultado del ejercicio debería imprimir en consola el mensaje “Hola Mundo ¡volvió JavaScript!” según el lenguaje definido.
//  Plantea los condicionales necesarios para que tu código funcione correctamente.

// Por ejemplo si la variable es fr (francés) el código debería retornar:
//     “Bonjour tout le mond, retour de JavaScript!”

// Probá el código con distintos idiomas.

let idioma = 'sarasa';

if(idioma == 'en'){
    console.log('Hello world! Javascript is back');

} else if(idioma == 'fr'){
    console.log("Bonjour tout le mond, retour de JavaScript!");

}else{
    console.log('Hola mundo bal bal bla');
}







let multiplicacion = [];
for (let i = 1; i <= 10 ; i++) {
    multiplicacion.push( i*5 )

};


console.log(multiplicacion);

