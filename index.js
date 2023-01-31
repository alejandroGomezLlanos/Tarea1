import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//=======================================================
//implementando todas las funciones de arrays en javascript

//alejandro gomez llanos 2201157

//esto es un index de un template de react

//asi que ignorar todo lo de import arriba y lo de abajo del todo
//que es el tema de etiquetas

//comenté todos los console.log
//ya que ensuciaban mucho la consola
//esta dividido todo con //==========
//para descomentar los console.log

// .values
const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
  //console.log(value);
  //mientras exista un valor en el array imprimalo
}
//=======================================================
//unshift
//mete al inicio del array algo como un objeto
const array2 = [1, 2, 3];

//console.log(array2.unshift(4, 5));
// Expected output: 5

//console.log(array2);
// Expected output: Array [4, 5, 1, 2, 3]
//=======================================================

//toString
//similar al toString de Java, llama todos los valores
//y los mete en una cadena
const array3 = [1, 2, "a", "1a"];

//console.log(array3.toString());
// Expected output: "1,2,a,1a"
//=======================================================

//to locate string
//busca el string que contenga dicho valor
const array4 = [1, "a", new Date("21 Dec 1997 14:12:00 UTC")];
const localeString = array4.toLocaleString("en", { timeZone: "UTC" });

//console.log(localeString);
// Expected output: "1,a,12/21/1997, 2:12:00 PM",
// This assumes "en" locale and UTC timezone - your results may vary

//mas ejemplos del mismo
const prices = ["￥7", 500, 8123, 12];
prices.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
//console.log(prices);
// basicmante busco la cadena con el simbolo yen
//para ver mas formatos se debe mirar las listas
//Intl.NumberFormat and Intl.DateTimeFormat pages.

//=======================================================

//splice

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// Inserts at index 1
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// Replaces 1 element at index 4
//console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

//se ven igual por shallow copy, pero en pocas palabras
//estamos incertando valores al array dando el index
//y el otro parametro es para incertar o borrar

//metemos drum y guitarra en posicion 2 sin borrar
const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed

//aqui metemos trompeta borrando en posicion 2
//para solo borrar no metemos tercer parametro

const myFish2 = ["angel", "clown", "drum", "sturgeon"];
const removed2 = myFish2.splice(2, 1, "trumpet");

// myFish is ["angel", "clown", "trumpet", "sturgeon"]
// removed is ["drum"]

//=======================================================
//sort

//el amigo de todos para no usar ciclos
//sirve para organizar con una logica
//sort((a, b) => { /* … */ } )
//la forma general para instaurar reglas en el filtro
//ejemplo es
//items.sort((a, b) => a.value - b.value);

const monthsx = ["March", "Jan", "Feb", "Dec"];
monthsx.sort();
//console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array6 = [1, 30, 4, 21, 100000];
array6.sort();
//console.log(array6);
// Expected output: Array [1, 100000, 21, 30, 4]

//=======================================================
//some

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

//console.log(array.some(even));
// Expected output: true

//devuelve falso o verdadero si alguno de los elementos cumple
//la condicion, no devuelve el valor
//=======================================================
//slice

const animals = ["ant", "bison", "camel", "duck", "elephant"];

//console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

//console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

//console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

//console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

//basicamente primer valor es del indice de donde empiezas a sacar
//valores, el otro es hasta donde, negativos se refieren
//de ultima posicion hacia la primera
//=======================================================
//shift

//The shift() method removes the first element
//from an array and returns that removed element.
//This method changes the length of the array.

//mas claro imposible. literalmente eso

const array7 = [1, 2, 3];

const firstElement = array7.shift();

//console.log(array7);
// Expected output: Array [2, 3]

//console.log(firstElement);
// Expected output: 1
//=======================================================
//reverse

//invierte el array, pero ojo que es destructivo con el arreglo

const array8 = ["one", "two", "three"];
//console.log('array8:', array8);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array8.reverse();
//console.log('reversed:', reversed);

//=======================================================
//reduce Right

const array9 = [
  [0, 1],
  [2, 3],
  [4, 5]
];

const result = array9.reduceRight((accumulator, currentValue) =>
  accumulator.concat(currentValue)
);

//console.log(result);
// Expected output: Array [4, 5, 2, 3, 0, 1]

//The reduceRight() method applies a function
//against an accumulator and each value
//of the array (from right-to-left) to reduce it to a single value.

//mejor se explica en el de abajo
//=======================================================
//reduce

const array10 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array10.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

//console.log(sumWithInitial);
// Expected output: 10

//basicamente toma los valores como un iterador y les aplica un proceso
//el de arriba es lo mismo pero de derecha a izquierda
//y se dice reduccion por volverlo un valor

//=======================================================
//push

//facilito, meter un valor en ultima posicion

const animalss = ["pigs", "goats", "sheep"];

const count = animalss.push("cows");
//console.log(count);
// Expected output: 4
//console.log(animalss);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]
//=======================================================
//pop

//The pop() method removes the last element
//from an array and returns that element.
//This method changes the length of the array.

//facil de entender, aqui con ejemplo
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

//console.log(plants.pop());
// Expected output: "tomato"

//console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
//=======================================================
//array of
//The Array.of() static method creates
//a new Array instance from a variable number
//of arguments, regardless of number or type of the arguments.

//no muy claro del todo, es como ¿un constructor?

Array.of(7); // [7]
Array(7); // array of 7 empty slots

//console.log(Array);

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]

//console.log(Array.of(1, 2, 3));

//si es como eso, un constructor para arrays
//=======================================================
//map

//map es pog, aplica una operacion a todo un arreglo
const array11 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array11.map((x) => x * 2);

//console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//hermoso evitar ciclos for
//=======================================================
//length

//para sacar el largo, AKA el numero de indices
const clothing = ["shoes", "shirts", "socks", "sweaters"];

//console.log(clothing.length);
// Expected output: 4
//=======================================================
//last_index_of
const animalsx = ["Dodo", "Tiger", "Penguin", "Dodo"];

//console.log(animalsx.lastIndexOf("Dodo"));
// Expected output: 3

//console.log(animalsx.lastIndexOf("Tiger"));
// Expected output: 1

//pregunta el index en el que esta ese valor
//PERO solo agarra el ultimo indice que lo tenga
//=======================================================
//keys()

const array12 = ["a", "b", "c"];
const iterator2 = array12.keys();

for (const key of iterator2) {
  //console.log(key);
}
//The keys() method returns a new Array Iterator
//object that contains the keys for each index in the array.

//basicamente mantiene indices del iterador, no su valor
//=======================================================
//join

const elements = ["Fire", "Air", "Water"];

//console.log(elements.join());
// Expected output: "Fire,Air,Water"

//console.log(elements.join(''));
// Expected output: "FireAirWater"

//console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

//The join() method creates and returns a new string
//by concatenating all of the elements in an array
//(or an array-like object), separated by commas or a
//specified separator string. If the array has
//only one item, then that item will be returned
//without using the separator.

//basicamente junta los valores del array pero defines como
//se separan
//=======================================================
//isArray

//The Array.isArray() static method
//determines whether the passed value is an Array.

let pepe = 3;

//console.log(Array.isArray(pepe));

//pues eso, falso o verdadero si es un array el valor
//=======================================================
//indexof

const beasts = ["ant", "bison", "camel", "duck", "bison"];

//console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
//console.log(beasts.indexOf('bison', 2));

//pregunta en que indice esta el valor, si esta multiples veces
//agarra el primero, si se quiere definir un rango
//para que inicie a buscar le damos un valor de start
//e ignora todo lo anterior en la busqueda

//=======================================================
//includes
//The includes() method determines whether an array
//includes a certain value among its entries,
//returning true or false as appropriate.

const array13 = [1, 2, 3];

//console.log(array13.includes(2));
// Expected output: true

//falso o verdadero si el array preguntado tiene un determinado valor
//=======================================================
//group to map

// Arrow function
//groupToMap((element) => { /* … */ })
//groupToMap((element, index) => { /* … */ })
//groupToMap((element, index, array) => { /* … */ })

// Callback function
//groupToMap(callbackFn)
//groupToMap(callbackFn, thisArg)

// Inline callback function
//groupToMap(function (element) { /* … */ })
//groupToMap(function (element, index) { /* … */ })
//groupToMap(function (element, index, array) { /* … */ })
//groupToMap(function (element, index, array) { /* … */ }, thisArg)

//funcion experimental, no la reconoce en codesandbox por ahora
//=======================================================
//group
//group((element) => { /* … */ })
//mismo tema que el anterior
//=======================================================
//from

//console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

//permite sacar caracteres de una cadena

//console.log(Array.from([1, 2, 3], x => x + x));
// Expected output: Array [2, 4, 6]

//o aplicarle una funcion al array para obtener otro array

//=======================================================
//forEach

const array14 = ["a", "b", "c"];

//array14.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//similar al for each, solo que en vez de hablar de un indice y un
//ciclo, hacemos una llamada a todos sus elementos y aplicacmos algo

//=======================================================
//flatMap

const arr1 = [1, 2, [3], [4, 5], 6, []];

const flattened = arr1.flatMap((num) => num);

//console.log(flattened);
// Expected output: Array [1, 2, 3, 4, 5, 6]

//vuelve el arreglo unidimensional
//se usa esto por ejemplo al pasar arreglos de redes neuronales
//que trabajan con imagenes (bidimensionales)
//a las neuronas para clasificar (unidimensional el arreglo)

//mucho texto para decir "los vuelve unidimensionales"
//=======================================================
//flat

const arr2 = [0, 1, 2, [3, 4]];

//console.log(arr2.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr3 = [0, 1, 2, [[[3, 4]]]];

//console.log(arr3.flat(2));
// Expected output: Array [0, 1, 2, Array [3, 4]]

//mismo que arriba pero tenemos un parametro
//The depth level specifying how deep a
//nested array structure should be flattened. Defaults to 1.

//basicamente cuantas llaves [] aguanta sin hacer flat,
//en el ejemplo superior si ponemos 5 le hace flat a todo
//=======================================================
//find last index
const arrayx = [5, 12, 50, 120, 44];

const isLargeNumber = (element) => element > 45;

//console.log(arrayx.findLastIndex(isLargeNumber));
// Expected output: 3
// Index of element with value: 130

//ponemos una condicion y el busca el ultimo indice que
//cumpla la condicion
//vease que llama al 3, incluso aunque sea un valor menor a 50
//=======================================================
//findIndex

const arrayy = [5, 12, 8, 130, 44];

const isLargeNumbery = (element) => element > 13;

//console.log(arrayy.findIndex(isLargeNumbery));
// Expected output: 3

//buscamos el indice de algo (en este caso mayor a 13)
//y obtenemos el primer valor que cumpla la condicion
//recordar que empieza array en 0
//devuelve -1 si nada lo cumple
//=======================================================
//find

const array100 = [5, 12, 8, 130, 44];

const found = array100.find((element) => element > 10);

//console.log(found);
// Expected output: 12

//The find() method returns the first element in
//the provided array that satisfies the provided
//testing function. If no values satisfy
//the testing function, undefined is returned.

//similar a findindex, esta devuelve indefinido si nada cumple la condicion
//=======================================================
//filter

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];

const result1 = words.filter((word) => word.length > 6);

//console.log(result1);
// Expected output: Array ["exuberant", "destruction", "present"]

//aplicar filtros, como en mySql
//aqui devuelve valores que no excedan 6 caracteres en la palabra
//=======================================================
//fill

//The fill() method changes all elements in an array
//to a static value, from a start index (default 0)
//to an end index (default array.length).
//It returns the modified array.

const array20 = [1, 2, 3, 4, 5];

// Fill with 0 from position 2 until position 4
//console.log(array20.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

//la forma de leer es (valor, inicio, fin)
//meta ceros desde posicion 2 hasta la cuarta
//y te vuelve estatico los valores del array modificados

//si alguna vez jugaste minecraft literalmente este comando existe
//en el juego es para denotar un rango de bloques y cambiar
//un tipo de bloque por otro
//lo mismo aqui pero con valores de array
//=======================================================
//every

const isBelowThreshold = (currentValue) => currentValue < 40;

const array21 = [1, 30, 39, 29, 10, 13];

//console.log(array21.every(isBelowThreshold));
// Expected output: true

//devuelve verdadero si todos los valores del arreglo
//pasan la condicion
//solo si TODOS lo hacen
//=======================================================
//entries
const array22 = ["a", "b", "c"];

const iterator21 = array22.entries();

//console.log(iterator21.next().value);
// Expected output: Array [0, "a"]

//console.log(iterator21.next().value);
// Expected output: Array [1, "b"]

//The entries() method returns a new Array Iterator
//object that contains the key/value pairs
//for each index in the array.

//formamos objetos JSON (clave + valor) con los valores del array
//y un indice
//metiendolos como entradas del array
//=======================================================
//copyWhithin

//The copyWithin() method shallow copies part
//of an array to another location in the same
//array and returns it without modifying its length.

const array23 = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
//console.log(array23.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
//console.log(array23.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

//en español
//el primer parametro es desde (index que afectas)
//segundo y tercero inicio y fin de copias

//vamos que haces un array igualito al original
//PERO
//le cambias valores en base a la copia original

//muy situacional esta funcion, no esta tan pog

//=======================================================
//concat

const arraya = ["a", "b", "c"];
const arrayb = ["d", "e", "f"];
const arrayc = arraya.concat(arrayb);

//console.log(arrayc);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//en pocas palabras concatenar
//tomamos 2 arreglos y los pegamos para formar un tercero
//=======================================================
//at

//The at() method takes an integer value and returns
//the item at that index, allowing for positive
//and negative integers. Negative integers count
//back from the last item in the array.

const array0 = [5, 12, 8, 130, 44];

let index = 2;

//console.log(`Using an index of ${index} the item returned is ${array0.at(index)}`);
// Expected output: "Using an index of 2 the item returned is 8"

index = -2;

//console.log(`Using an index of ${index} item returned is ${array0.at(index)}`);
// Expected output: "Using an index of -2 item returned is 130"

//nos devuelve el valor (interno del array) de un indice
//si es negativo basicamente maneja de derecha a izquierda los pasos
//=======================================================

//o ultimo a comentar es que new array y array es lo mismo para
//javascript

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
