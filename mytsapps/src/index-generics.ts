//Arrays

//without type 
let mylist = [1, "hello", true]

//with type 
//non generic syntax
let numList: number[] | string[] = [1, 2, 4]
//generic syntax
let strList: Array<string | number> = ["test", "hai"]
//generics types are container types
//eg : Array<?>,Promise<?>,Observable<?>

