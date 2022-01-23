let cat = {
    name: 'Tom',
    breed: 'Siam',
    myay: function () { console.log('Cat ' + this.name + ' said: ' + 'mayyyyyyy.....mayyyy!')},
    eat: function() { console.log(`${this.name} started eating ammm ammm....`)},
}

cat.myay();
cat.eat();
cat.name = 'Ivan';
cat.eat();