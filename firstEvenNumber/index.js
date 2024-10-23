// Trouver le premier nombre pair dans un tableau


const numbers = [1, 3, 7, 8, 10];

function findFirstEven(array) {
    for(i = 0; array.length; i++) {
        if (array[i] % 2 == 0) {
            return array[i]
        }
    }
}

console.log(findFirstEven(numbers)); // 8