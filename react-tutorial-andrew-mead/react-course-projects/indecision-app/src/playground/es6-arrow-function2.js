//argument object - no longer bound with arrow function
// const add = function(a,b){
//     console.log(arguments)
//     return a+b;
// };

const add = (a,b) =>{
    // arguments does not work here
    //console.log(arguments)
    return a+b;
};
console.log(add(22,35));

// this keyword - no longer bound

// const user = {
//     name : 'Aditya',
//     cities :['Bangalore', 'Delhi', 'BBSR', 'Tempe' ],
//     printPlacesLived: function ()  {
//         console.log(this.name);
//         console.log(this.cities);
//         this.cities.forEach(function(city){
//             // this does not work here
//             console.log(this.name + ' has lived in ' + city);
//         })
//     }

// }

// const user = {
//     name : 'Aditya',
//     cities :['Bangalore', 'Delhi', 'BBSR', 'Tempe' ],
//     printPlacesLived: function ()  {
//         console.log(this.name);
//         console.log(this.cities);
//         this.cities.forEach((city)=>{
//             // this works here
//             console.log(this.name + ' has lived in ' + city);
//         })
//     }

// }

// const user = {
//     name : 'Aditya',
//     cities :['Bangalore', 'Delhi', 'BBSR', 'Tempe' ],
//     // this do not work in comment
//     //printPlacesLived: () =>  {
//     // this work below
//     //printPlacesLived: function () {
//     printPlacesLived() {
//         console.log(this.name);
//         console.log(this.cities);
//         this.cities.forEach((city)=>{
//             // this works here
//             console.log(this.name + ' has lived in ' + city);
//         })
//     }

// }

// const user = {
//     name : 'Aditya',
//     cities :['Bangalore', 'Delhi', 'BBSR', 'Tempe' ],
//     printPlacesLived() {
//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//         return cityMessages;
//     }

// }

//shorthand
const user = {
    name : 'Aditya',
    cities :['Bangalore', 'Delhi', 'BBSR', 'Tempe' ],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }

}

console.log(user.printPlacesLived());

//challenge
const multiplier = {
    numbers : [1,2,3,4,5],
    multiplyBy : 7,
    multiply()  {
        return this.numbers.map((number) => this.multiplyBy * number);
    }

}

console.log(multiplier.multiply());



