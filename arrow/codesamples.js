
const numbers = [1, 2, 3, 4, 5];

/*
    Function
 */
const square1 = numbers.map(function(num) {
    return num * num;
});
console.table(square1);


/*
    1.
    Arrow Function met haken om de parameter
 */
const square2 = numbers.map((num) => {
    return num * num;
});
console.table(square2);


/*
    2.
    Als er 1 patameter is dan kun je de haken om deze variabele
    ook weglaten.
 */
const square3 = numbers.map(num => {
    return num * num;
});
console.table(square3);


/*
    3.
    Implicit return, one liner
    geen return keyword
 */
const square4 = numbers.map(num => num * num);
console.table(square4);


/*
    4.
    Without parameter
 */
const square5 = numbers.map(() => 'Hey');
console.table(square5);
