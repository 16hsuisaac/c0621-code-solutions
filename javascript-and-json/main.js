var array = [{ isbn: '123', title: 'abc', author: 'a1' }, { isbn: '456', title: 'def', author: 'b1' }, { isbn: '789', title: 'ghi', author: 'c1' }];
console.log('Array: ', array, 'Typeof', typeof array);
var string = JSON.stringify(array);
console.log('Stringify', string, 'Typeof', typeof string);

var myString = '[{ "Number id": "123", "String name": "OogaBooga" }]';
console.log('myString', myString, 'Typeof', typeof myString);
var object = JSON.parse(myString);
console.log('object', object, 'Typeof', typeof object);
