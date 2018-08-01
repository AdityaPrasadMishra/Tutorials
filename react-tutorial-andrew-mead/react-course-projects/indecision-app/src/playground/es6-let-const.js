var nameVar = 'Andrew';
nameVar = 'Mike';
console.log(nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);



// Block Scoping

var fullName = 'Jen Mead';

if(fullName)
{
    //let and Const are block scoped and var is function scoped
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

//Using const first and then if required change it to let