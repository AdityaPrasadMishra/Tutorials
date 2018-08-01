const square = function(x)
{
    return x*x;
};

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;

console.log(square(8))
console.log(squareArrow(4))

// const getFirstName = (fullName) =>
// {        
//     let firstName = fullName.split(' ')[0];    
//     return firstName;
// }

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName("Andrew Mead"));