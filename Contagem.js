function contarInteirosEntre(inicio, fim) {
    if (fim < inicio) {
        [inicio, fim] = [fim, inicio];
    }
    let quantidade = 0;
    for (let i = inicio; i <= fim; i++) {
        quantidade++;
    }
    return quantidade;
}
console.log(contarInteirosEntre(1, 10)); // 10
console.log(contarInteirosEntre(5, 3));  // 3
console.log(contarInteirosEntre(7, 7));  // 1