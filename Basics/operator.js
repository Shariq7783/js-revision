// Operator in JavaScript

/*      Arithematic Operator        
            + - * /
            Modulus     %
            Exponential **
            Unary Oprator
            Increment   ++
            Decrement   --
*/

let a=5 
let b=2
console.log("a =",a,"b =",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);
console.log("a / b =",a/b);

console.log("a % b =",a%b);
console.log("a^b =",a**b);

console.log("a++ =",a++);
console.log("a-- =",a--);

/* Assignment Operator
        = , += , -= , *=, /=, %=, **=

*/

let x=10, y=5;
console.log("x =", x, "y =", y)
console.log(x+=1);
console.log(x-=1);
console.log(x*=2);
console.log(x/=2);
console.log(x%=2);
console.log(y**=2);



/*      Comparison Operators
            ==      Equal to
            ===     Equal to & type
            !=      Not equal to 
            !==     Not equal to & type
            >       greater than
            >=      greater or equal to
            <       less than
            <=      less or equal to 

*/

let p=10,q="10";

console.log(" Equal to :")
console.log("p =",p,"q =",q)        
console.log("p==q",p==q);       //converts string into number and then compares
q="10"

console.log(" Equal to & type :")
console.log("p =",p,"q =",q)
console.log("p===q",p===q);     //doesn't converts anything check with the type of var and then compares

        
console.log(" Not Equal to :")
console.log("p!=q",p!=q); 

console.log(" Not Equal to & type:")
console.log("p!==q",p!==q);  


/*          Logical Operators
                Logical AND -> &&
                Logical OR  -> ||
                Logical Not ->  !

*/

a=6
b=10

console.log(" AND Operator")
console.log(a<b && b==10);
console.log(a>b && b==10);

console.log(" OR Operator")
console.log(a<b || b==10);
console.log(a>b || b==10);
console.log(a==4 || b==2);


console.log(" Not Operator")
console.log(!(a==6));       //we know a=6 but not gives the negation



/*      Ternary Operator

    condition ? true output : false output

*/

console.log("Ternary Operator")
let age=14;

let result= age>18 ? "Adult" : "Not Adult";
console.log(result);