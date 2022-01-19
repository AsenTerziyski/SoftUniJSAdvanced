let names = ['Pesho', 'Gosho', 'Mariya'];
console.log(names);
names[2] = 'George';
console.log(names);
names.length = 10;
console.log(names);
names[7] = 'Ivan';
console.log(names);
console.log(names[7]);
console.log(names[9]);

//Array Destructuring Sssignment Syntax
let[first, second, thirth, x, y,z,a,b] = names;
console.log(second);
console.log(x);
console.log(y);
console.log(b);


//others


let names2 = ['Pesho0', 'Gosho1', 'Mariya2'];
names2[4] = 'TestName';
names2[5] = 'TestName2';
let [f,s,t,...others] = names2;
console.log(others)