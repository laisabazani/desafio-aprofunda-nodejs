function imprimePares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

imprimePares(10);
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  console.log(soma);
}

somaArray([1, 2, 3, 4, 5]);
function ePrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(ePrimo(7));
console.log(ePrimo(10));
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();
function contaVogais(str) {
  const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêîôûÂÊÎÔÛãõÃÕ";
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
    if (vogais.includes(str[i])) {
      contador++;
    }
  }

  console.log(contador);
}

contaVogais("Node.js é incrível");
function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

tabuada(5);
function inverteString(str) {
  const invertida = str.split("").reverse().join("");
  console.log(invertida);
}

inverteString("hello");
function maiorNumero(arr) {
  const maior = Math.max(...arr);
  console.log(maior);
}

maiorNumero([3, 10, 6, 2]);
function ePalindromo(str) {
  const formatado = str.toLowerCase().replace(/[\W_]/g, '');
  const invertido = formatado.split('').reverse().join('');
  return formatado === invertido;
}

console.log(ePalindromo("Ame a ema"));
console.log(ePalindromo("Olá mundo"));
function calculaMedia(notas) {
  const soma = notas.reduce((acc, nota) => acc + nota, 0);
  const media = soma / notas.length;
  const status = media >= 7 ? "Aprovado" : "Reprovado";
  console.log(`${status} - Média: ${media.toFixed(1)}`);
}

calculaMedia([8, 7, 6]);
calculaMedia([5, 6, 4]);