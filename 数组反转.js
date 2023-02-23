
let arr1 = [22, 55, 5, 88, 66, 77, 111, 3];

for (var i = 0; i < arr1.length / 2; i++) {
  let temp = arr1[i];
  arr1[i] = arr1[arr1.length - 1 - i];
  arr1[arr1.length - 1 - i] = temp;
}

console.log(arr1);