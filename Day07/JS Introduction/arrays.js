//Arrays

let arr = [1, 2, 3];
// console.log(arr.length);
// console.log(arr[1]);

let arr2 = [1, "hello", false, [2, 3]];
// console.log(typeof arr2[3]);

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

//for-of loop (of is used for accessing the items inside the loop)

// for (let val of arr2) {
//   console.log(val);
// }

//for-in loop (in is for index)
for (let index in arr2) {
  console.log(index);
}
