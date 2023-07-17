export function getInsertionSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    selectionsort(array.length, auxiliaryArray, animations);
    array = auxiliaryArray.slice();
    console.log(animations);
    return animations;
}

function selectionsort(length, auxiliaryArray, animations) {

    for (let i = 1; i < length; i++) {
        let temp = auxiliaryArray[i];
        let j = i - 1;
        animations.push([i]);
        animations.push([i]);
        while (j >= 0 && auxiliaryArray[j] > temp) {
            auxiliaryArray[j + 1] = auxiliaryArray[j];
            j = j - 1;
        }
        auxiliaryArray[j + 1] = temp;

        animations.push([auxiliaryArray, i]);
    }

}