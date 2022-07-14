
/* Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)

Atividade 2
Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo: Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1 */


//solucao1
function verificaPalidromo(string){
  /*   if(!string) return "string inexistente";

    return string.split("").reverse().join("") === string; */

}

//console.log(verificaPalidromo("ama"));

//solucao2 

/* function verificaPalidromo2(string){
    if(!string) return "string inexistente";


    for (let i = 0; i <string.length / 2; i++){
        if(string[i] !== string[string.length -1 - i]){
        return false;
         }
    }

    return true;
}

console.log(verificaPalidromo2("gato")); */


// atividade 2

function substituiNumerosPares(array) {
	if (!array.length) return console.log(-1);

	const naoZero = (num) => num !== 0;
	const numPar = (num) => num % 2 === 0;

	for (let i = 0; i < array.length; i++) {
		if (numPar(array[i]) && naoZero(array[i])) {
			console.log(`trocando ${array[i]} por 0...`);
			array[i] = 0;
		} else if (!naoZero(array[i])) {
			console.log('Ops, você já vale 0!');
		}
	}
	console.log(array);
}

substituiNumerosPares([2, 0, 3, 5]);