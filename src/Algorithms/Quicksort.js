export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    quickSortHelper(auxiliaryArray, 0, array.length - 1, animations);
    console.log(auxiliaryArray);
    return animations;
}

function quickSortHelper(auxiliaryArray, left, right, animations) {
    var index;
    if (auxiliaryArray.length > 1) {
        index = partition(auxiliaryArray, left, right, animations);
        if (left < index - 1) {
            quickSortHelper(auxiliaryArray, left, index - 1, animations);
        }
        if (index < right) {
            quickSortHelper(auxiliaryArray, index, right, animations);
        }
    }
    return auxiliaryArray;
}

function swap(auxiliaryArray, leftIndex, rightIndex) {
    var temp = auxiliaryArray[leftIndex];
    auxiliaryArray[leftIndex] = auxiliaryArray[rightIndex];
    auxiliaryArray[rightIndex] = temp;
}

function partition(auxiliaryArray, left, right, animations) {
    var pivot = auxiliaryArray[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (auxiliaryArray[i] < pivot) {
            i++;
        }
        while (auxiliaryArray[j] > pivot) {
            j--;
        }
        if (i <= j) {
            animations.push([i, j]);
            animations.push([i, j]);
            animations.push([i, auxiliaryArray[j], j, auxiliaryArray[i]]);
            swap(auxiliaryArray, i, j);
            i++;
            j--;
        }
    }
    return i;
}