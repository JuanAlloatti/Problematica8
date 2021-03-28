/*Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

var usuario = "JuanAlloatti";

console.log(usuario.toUpperCase());


/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los primeros 5 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/

var primerasCuatroLetrasDeUsuario;

primerasCincoLetrasDeUsuario = usuario.substring (0, 5)

console.log(primerasCincoLetrasDeUsuario);


/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con los últimos 3 caracteres guardando 
el resultado en una nueva variable (utilizar substring).*/

var ultimasTresLetras;

ultimasTresLetras = usuario.substring (usuario.length -3, usuario.length);

console.log(ultimasTresLetras);


/*Crear una variable de tipo string con al menos 10 caracteres y 
generar un nuevo string con la primera letra en mayúscula y las 
demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

var usuarioSoloPrimeraMayuscula;

usuarioSoloPrimeraMayuscula = (usuario.substring (0,1)).toUpperCase() + (usuario.substring (1, usuario.length).toLowerCase());

console.log (usuarioSoloPrimeraMayuscula);


/*Crear una variable de tipo string con al menos 10 caracteres y 
algún espacio en blanco. Encontrar la posición del primer espacio 
en blanco y guardarla en una variable (utilizar indexOf).*/

var mejorSerie, primerEspacio;

mejorSerie = "The Simpsons";

primerEspacio = mejorSerie.indexOf(" ");

console.log(mejorSerie, primerEspacio);


/*Crear una variable de tipo string con al menos 2 palabras largas 
(10 caracteres y algún espacio entre medio). Utilizar los métodos 
de los ejercicios anteriores para generar un nuevo string que tenga 
la primera letra de ambas palabras en mayúscula y las demás letras 
en minúscula (utilizar indexOf, substring, toUpperCase, 
toLowerCase y el operador +).*/

var debSupp, dualCaps;

var debSupp = "debugging support";

dualCaps = (debSupp.substring(0,1)).toUpperCase() + (debSupp.substring(1, debSupp.indexOf(" ")).toLowerCase()) + (debSupp.substring(debSupp.indexOf(" "), debSupp.indexOf(" ") +2)).toUpperCase() + (debSupp.substring(debSupp.indexOf (" ") +2, debSupp.length)).toLowerCase();

console.log(debSupp, dualCaps);



 




