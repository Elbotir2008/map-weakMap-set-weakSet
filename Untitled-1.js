/////////////// 1-misol ///////////////
// let obj1 = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3],
//   ["d", 4],
//   ["e", 5],
//   ["f", 6],
// ]);
// function deleteMany(obj1, keys) {
//   for (let key of keys) {
//     obj1.delete(key);
//   }
//   return obj1;
// }
// obj1 = deleteMany(obj1, "a");
// console.log(obj1.entries());

/////////////// 2-misol ///////////////
// function mapSum(obj) {
//   let sum = 0;
//   obj = new Map([
//     ["a", 2],
//     ["b", 5],
//     ["c", 3],
//     ["f", 4],
//   ]);
//   obj.forEach((el) => {
//     sum += el;
//   });
//   console.log(sum);
// }
// mapSum();

/////////////// 3-misol ///////////////
// let map1 = new Map([
//   ["apple", 1],
//   ["banana", 2],
//   ["orange", 3],
// ]);
// // console.log(map1);
// let map2 = new Map([
//   ["apple", 4],
//   ["grape", 6],
//   ["orange", 5],
// ]);
// // console.log(map2);

// let map3 = new Map();
// map1.forEach((value, key) => {
//   if (!map2.has(key)) {
//     map3.set(key, value);
//   }
// });
// map2.forEach((value, key) => {
//   if (!map1.has(key)) {
//     map3.set(key, value);
//   }
// });
// console.log(map3);

/////////////// 4-misol ///////////////

// let obj1 = new Map([
//   [{ id: 1 }, "John"],
//   [{ id: 2 }, "Jane"],
//   [{ id: 3 }, "Alice"],
//   [{ id: 2 }, "Jane"],
// ]);
// let sum = 0;
// obj1.forEach((sum) => console.log(sum++));

/////////////// 5-misol ///////////////
// function setUnion(set1, set2) {
//   set1 = new Set([1, 2, 3]);
//   set2 = new Set([2, 3, 4]);
//   for (const i of set2) {
//     set1.add(i);
//   }
//   console.log(set1);
// }
// setUnion();
/////////////// 6-misol ///////////////
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);
// function setIntersection(set1, set2) {
//   let set3 = new Set();
//   for (let value of set1) {
//     if (set2.has(value)) {
//       set3.add(value);
//     }
//   }
//   return set3;
// }
// console.log(setIntersection(set1, set2));

// let arr3 = [];
// function mer(arr1, arr2) {
//   arr3.concat(arr1);
//   return arr3;
// }
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = mer(arr1, arr2);
// console.log(res);
