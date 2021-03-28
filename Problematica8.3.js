/*Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

/*Mostrar por consola los meses 5 y 11 (utilizar console.log)*/

console.log(months [4], months [10]); 


/*Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

console.log(months.sort());


/*Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.unshift("month zero");

months.push("last thirteen");

console.log(months);


/*Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

months.shift();

months.pop()

console.log(months);


/*Invertir el orden del array (utilizar reverse)*/

console.log(months.reverse());


/*Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).*/

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var stringMonths

stringMonths = months.join("-");

console.log(stringMonths);


/*Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var mayoNoviembre;

mayoNoviembre = months.slice(4,11);

console.log(mayoNoviembre);