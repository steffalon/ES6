
/*

 Het kan je overkomen dat je code van anderen moet debuggen
 of dat je deze moet herschrijven omdat er een nieuwe versie van de programmeertaal is.

 Corrigeer de voorbeelden 1 tm 4.
 De code is correct zonder foutmeldingen, gebruik de console.

 Map en Filter worden veel gebruikt, lees zelf hoe map, filter en reduce werken.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

 */

// Corrigeer 1.
var add () => 1 + 1;
console.log(add());

// Corrigeer 2.
var divide = num1, num2 => num1 / num2;
console.log(divide(7, 2))

// Corrigeer 3.
var square = (width, length) => {
    const double = 2;
    let width = width * double;
    let length = length * double;
    width * length;

}
console.log(square(10, 15));

// Corrigeer 4.
var counting = {4, 2, 14}.map((x) => {
    var add = x + 1;
    return x * add;
});
console.log(counting);


/*

 Herschrijf de volgende voorbeelden nu met de Arrow Function Syntax

 */

const numbers = [0, 1 , 3, 4, 7, 13, 22, 31, 36];
const score = [
    {course: 'FrontEnd', grade: 3},
    {course: 'PHP', grade: 7},
    {course: 'Backend', grade: 9},
    {course: 'Java', grade: 4}
];

// Herschrijf 1.
const oneven = numbers.filter(function (number) {
    return number % 2;
});
console.log(oneven);

// Herschrijf 2.
const sum = numbers.reduce(function(first, second) {
    return first + second;
}, 0);
console.log(sum);

// Herschrijf 3.
const total = score.reduce(function(first, second) {
    return first + second.grade;
}, 0);
console.log(total);

// Herschrijf 4.
const range = numbers.filter(function(number) {
    return number > 5 && number < 30;
});
console.log(range);

// Herschrijf 5.
const double = numbers.map(function(number) {
    return number * 2;
});
console.log(double);