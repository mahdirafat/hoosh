function findMinArr(arr) {
    var min = arr[0];
    for (var i in arr) {
        min > arr[i] && (min = arr[i]);
    }
    return min;
}
function findMaxArr(arr) {
    var max = arr[0];
    for (var i in arr) {
        max < arr[i] && (max = arr[i]);
    }
    return max;
}
var arr = [
    [3, 12, 8],
    [4, 4, 6],
    [14, 5, 2],
];
var minArr = [];
var term1 = arr.shift();
var term2 = arr.shift();
var term3 = arr.shift();
console.log(term1, term2, term3);
minArr.push(findMinArr(term1));
minArr.push(findMinArr(term2));
minArr.push(findMinArr(term3));
console.log(minArr);
console.log(findMaxArr(minArr));
