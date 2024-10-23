const arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

function uniqueValues(arr) {
    const newArray = []
    arr.forEach(el => {
        if (!newArray.includes(el)) {
            newArray.push(el);
        }
    })
    return newArray
}

// Écris une fonction qui prend un tableau en argument et retourne un tableau contenant uniquement des valeurs uniques.
console.log(uniqueValues(arr)); // [1, 2, 3, 4, 5, 6, 7]