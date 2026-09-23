function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const menores = [];
    const maiores = [];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            menores.push(array[i]);
        } else {
            maiores.push(array[i]);
        }
    }
    return [...quicksort(menores), pivot, ...quicksort(maiores)];
}
console.log(quicksort([8, 3, 1, 6, 4, 7, 2, 5]));
console.log(quicksort([10, 2, 9, 3, 1]));
console.log(quicksort([5, 5, 5, 5]));
