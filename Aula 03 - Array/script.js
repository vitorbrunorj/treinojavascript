// o que são vetores ou array 

/* como declarar um array
let array = ['string', 1, true];
console.log(array); */

//pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'],['array4']];
/*console.log(array[3]); */

/* forEach - Intera um array
array.forEach(function(item, index){console.log(item, index)});*/

/* push - add novo item no final de um array 
array.push('novo item');
console.log(array) */

/* pop ele remove o ultimo item no final do array
array.pop();
console.log(array); */ 

/* shift ele remove o primeiro item do array
array.pop();
console.log(array); */

/* unshift ele adiciona um intem no inicio do array
array.unshift('novo item no inicio');
console.log(array); */

/* indexOf retorna um indice de um valor do array
console.log(array.indexOf(true)); */

/* splice remove ou substitui um item pelo indice, ele apagou todos os indices até o 3 e só retornou os indices array
array.splice(0 , 3)
console.log(array); */

/* slice ele retorna uma parte de uma array já existente, pode ser passado um start e um end que no caso é o 0 ao 3 - Ele esta retornando os 3 primeiros indices

let novoArray = array.slice(0, 3);
console.log(novoArray); */

//Manipulando objetos

let object = { string: 'string', numeber: 1, boolean: true, array: ["array"], objectInterno: {objetInterno:'objeto interno'}};

/*console.log(object);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
