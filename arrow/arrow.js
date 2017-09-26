//SCOPING
//
//     Deze code komt van MDN,
//     toegevoegd de console.log om de verschillen goed weer te geven
//

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;

    setInterval(function growUp() {
        // In non-strict mode, the growUp() function defines `this`
        // as the global object, which is different from the `this`
        // defined by the Person() constructor.
        this.age++;
        // console.log(this.age);
        // console.log(this);

    }, 1000);
}
const p = new Person();

function Person1() {
    let that = this;
    that.age = 0;

    setInterval(function growUp() {
        // The callback refers to the `that` variable of which
        // the value is the expected object.
        that.age++;
        // console.log(that.age);
        // console.log(this);
    }, 1000);
}
const p1 = new Person1();


function Person2(){
    this.age = 0;

    setInterval(() => {
        this.age++; // |this| properly refers to the person object
        console.log(this.age);
        console.log(this);
    }, 1000);
}
const p2 = new Person2();



// SCOPING ANOTHER EXAMPLE

const md2 = {
    name: 'MD2A',
    teachers: ['Simon', 'Milos', 'Rosmerta'],

    printTeachers: function () {
        this.teachers.forEach(function (teacher) {
            console.log(teacher, ': ', this.name);
        })
    }
};
md2.printTeachers();


const md2Arrow = {
    name: 'MD2A',
    teachers: ['Simon', 'Milos', 'Rosmerta'],

    printTeachers: function() {
        this.teachers.forEach((teacher) => {
            console.log(teacher, ': ', this.name); }) 
    }
};
md2Arrow.printTeachers();