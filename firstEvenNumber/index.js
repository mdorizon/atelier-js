// Trouver le premier nombre pair dans un tableau


const numbers = [1, 3, 7, 8, 10];

function findFirstEven(array) {
    return array.find((el) => el % 2 == 0)
}

console.log(findFirstEven(numbers)); // 8