export function getSelectionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    selectionsort(array, array.length, auxiliaryArray, animations);
    console.log(array);
    return animations;
}

function selectionsort(array, length, auxiliaryArray, animations) {
    for (let i = 0; i < length; i++) {
        let min = i;

        animations.push([i]);
        animations.push([i]);
        for (let j = i + 1; j < length; j++) {
            if (auxiliaryArray[j] < auxiliaryArray[min]) {
                min = j;
            }
        }

        animations.push([i, auxiliaryArray[min], min, auxiliaryArray[i]]);

        let temp = auxiliaryArray[i];
        auxiliaryArray[i] = auxiliaryArray[min];
        auxiliaryArray[min] = temp;

        let temp2 = array[i];
        array[i] = array[min];
        array[min] = temp2;
    }
}
