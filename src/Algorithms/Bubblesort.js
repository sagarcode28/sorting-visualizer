export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    bubblesort(array, array.length, auxiliaryArray, animations);
    return animations;
}

function bubblesort(array, endidx, auxiliaryArray, animations) {

    let k = endidx;

    for (let i = 0; i < k - 1; i++) {
        for (let j = 0; j < k - i - 1; j++) {
            animations.push([j, j + 1]);
            animations.push([j, j + 1]);
            if (auxiliaryArray[j + 1] < auxiliaryArray[j]) {
                animations.push([j, auxiliaryArray[j + 1], j + 1, auxiliaryArray[j]]);
                let temp = auxiliaryArray[j];
                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
                let temp2 = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp2;
            } else {
                animations.push([j, auxiliaryArray[j], j + 1, auxiliaryArray[j + 1]])
            }
        }
    }
}

