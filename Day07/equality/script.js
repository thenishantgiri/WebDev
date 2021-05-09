console.log(1 == "1"); //true ; checks only value, or if the same value can be achieved by changing the datatype
console.log(1 === "1"); //false ; checks both datatype and values

//peculiar cases

console.log(0 == ""); //true, because Number('') == 0

console.log("false" == false); //false, converts to number; 0 != NaN (Not a Number)

console.log("" == false); //true, both typecast to 0

// this doesn't hold good for abstract equaity
// a = b, b = c ... implies that ...a = c

console.log([1, 2] == [1, 2]); //false, as it creates two references
