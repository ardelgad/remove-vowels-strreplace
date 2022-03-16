function removeVowels(frase) {
    // Implementar código aquí
    /*Ejercicio 1
    Implementa la función __removeVowels__ del fichero remove-vowels.js. Verifica que tu algoritmo funciona bien ejecutando __node app.js__ */
    let vowels = /[aeiou]/gi
   
    // Obligatorio: utilizar una expresión regular y el método de string "replace": https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace

    let resultado = frase.replace(vowels, "")

    return resultado;
}
console.log(removeVowels('codewars')); // --> cdwrs
console.log(removeVowels('holaholaaa')); // -->hlhl



/*Ejercicio 2

Instala Jest. Modifica el fichero package para poder ejecutar los tests. Escribe dos tests que prueben un conjunto de datos suficiente para la función de eliminar vocales. */