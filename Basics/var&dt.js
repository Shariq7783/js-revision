console.log("Variables and Datatypes in JavaScript");
/*
    number
    bigint
    boolean
    string
    null
    undefined
*/

console.log(typeof 232);
console.log(typeof null);
console.log(typeof undefined);

/*Variable in JavaScript
        var => before 2015 - not preffered
        let =>  new way to declare var - didnt take repetative space to form the same var only updates the previous.
        const => some value must be assigned 
        */

let a = 10;
a = 20;
a = 40; // cant write let a=40 again once a is declared using let but in case of var it is possible because var is creating new variable through same variable name again and again
console.log(a);

var b = 10;
var b = 20;
var b = 30;
console.log(b);

/* Datatypes in JavaScript
    Primitive (7)               Non Primitive 
        Number                      Objects -> Arrays & Function
        BigInt
        String
        Boolean
        Null
        Undefined
*/

const student = {
    name: "shariq",
    sem: "7th",
    sec: "c",
};
console.log(typeof student)
console.log(student.name);
console.log(student["sec"])
student["sec"] = "A"        // we can change the object keys of const variable but we can't change the const variables itself.
console.log(student.sec)


// New Object

const profile={
    username :"@shariq7783",
    follower: 123,
    following: 10,
    isFollow: true

};
console.log(profile);
