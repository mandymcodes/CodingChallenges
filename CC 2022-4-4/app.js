//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]

//P:Is it always going to be intergers? Are we going to be given any special characters? An empty array ever?
//R:Return a new array with each value doubled
//E(xample): If we are given [2,3,4], should return [4,6,8]
//  If we are given [4,5,6], should return [8,10,12]
//  If we are given [2,22], should return [4,44]
//P:Make a function that takes in an array
function doubled(arr){
    return arr.map(element=>element*2)
}
// OR
//[1,2,3].map(1=>1*2) -> 2
//           (2=>2*2) -> 4
//           (3=>3*2) -> 6
//           [2,4,6]
// OR
//function double(arr){
//    return arr.map(function arrow (e){
//        return e*2
//    })
//}

//map through the array and multiply each element by 2 and return
doubled([1,2,3])//just the answer
console.log(double([2,3,4]),[(4,6,8)]//answer you're supposed to get
