function somatorio(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}
console.log(somatorio([1, 2, 3, 4, 5])); // 15
console.log(somatorio([10, 20, 30]));    // 60
console.log(somatorio([7, 3, 2]));       // 12