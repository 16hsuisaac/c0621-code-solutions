function ExampleConstructor() {

}
console.log('prototype ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor prototype', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor', newExampleConstructor);
var instanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log('instanceOf', instanceOf);
