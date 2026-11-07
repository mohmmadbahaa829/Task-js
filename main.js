// saction:1
let num= Number(prompt("entar numbar :"));
for (let i = 1; i <= 10; i++) {
    console.log(num*i);
    
}




// section:2
for (let a=1; a<=50; a++){
    if (a % 5 === 0){
        console.log(a);
        
    }
}





// section:3
let b=2 ;
while (b <=50) {
    console.log(b);
    b +=2
        
}




// section:4
let c=10;
do {
    console.log(c);
    c--;
}
while(c >= 1)
    console.log("lift off!");





// saction:5
const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Mohamed"));







// section:6
let random = Math.floor(Math.random() *10) +1;
console.log(random);






// section:7
let scores = [80, 95, 60, 75, 90];

let highest = Math.max(...scores);
let lowest = Math.min(...scores);

console.log(" Score:", highest);
console.log(" Score:", lowest);






// section:8
let temp = -4.7;

console.log(Math.abs(temp));
console.log(Math.ceil(temp));
console.log(Math.floor(temp));
console.log(Math.round(temp));







// section:9
let name = prompt("Enter your full name");

name = name.trim();

console.log("Length:", name.length);

console.log("Uppercase:", name.toUpperCase());

console.log("Lowercase:", name.toLowerCase());

console.log("First Space:", name.indexOf(" "));

console.log("First Name:", name.split(" ")[0]);








// section:10
let names = ["Ahmed", "Mohammed", "Ali", "Omar"];

let randomIndex = Math.floor(Math.random() * names.length);

console.log(names[randomIndex]);