// ==========================================
// Exercício 1 — Criando array simples
// Crie um array chamado `cores` com três cores e mostre a segunda cor no console.
// (Dica: Lembre-se de que os índices do array começam em 0)
// ==========================================

let cores = ["Preto", "Roxo", "Azul"];
console.log(cores[1]);

console.log("\n----------------------------------------\n");

// ==========================================
// Exercício 2 — Primeiro e último número
// Crie um array `numeros` com cinco números e mostre o primeiro e o último no console.
// ==========================================

let numeros = [10, 20, 30, 40, 50];
console.log("Primeiro número:", numeros[0]);
console.log("Último número:", numeros[4]);

console.log("\n----------------------------------------\n");

// ==========================================
// Exercício 3 — Adicionando item ao array
// Crie um array `frutas` com duas frutas. 
// Depois adicione uma terceira usando o método `.push()` e mostre o array no console.
// ==========================================

let frutas = ["Maçã", "Banana"];
frutas.push("Laranja");
console.log(frutas);

console.log("\n----------------------------------------\n");

// ==========================================
// Exercício 4 — Removendo o último item
// Crie um array `nomes` com quatro nomes e remova o último usando o método `.pop()`.
// ==========================================

let nomes = ["Ana", "Carlos", "Beatriz", "Daniel"];
nomes.pop();
console.log(nomes);

console.log("\n----------------------------------------\n");

// ==========================================
// Exercício 5 — Contando elementos
// Crie um array `times` com quatro times e mostre quantos elementos existem nele utilizando a propriedade `.length`.
// ==========================================

let times = ["Flamengo", "Santos", "São Paulo", "Corinthians"];
console.log("Quantidade de elementos:", times.length);