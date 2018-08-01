class Person {
   
    constructor(name = 'Anonymous', age=0){
       //console.log('test')
       this.name = name;
       this.age = age;
   }

   getGreeting(){
       //return 'Hi, I am ' + this.name + '!' ;
       //use back tick key (just beside 1)
       return `Hi. I am ${this.name} !`;
}

getDescription(){
    return `${this.name} is ${this.age} year(s) old.`
}


}

class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor())
        {
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

const me = new Student('Aditya Mishra', 29,'Computer Science');
console.log(me);
console.log(me.hasMajor());
//console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Student();
console.log(other); 
console.log(other.hasMajor());
//console.log(other.getGreeting());
console.log(other.getDescription());

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if (this.hasHomeLocation())
        {
            greeting += ` I am visting from ${this.homeLocation}.`;
        }

        return greeting;
    }

}

const metoo = new Traveler('Aditya Mishra', 29, 'Brahmapur');
console.log(metoo);
console.log(metoo.hasHomeLocation());
console.log(metoo.getGreeting());

const otherTraveler = new Traveler();
console.log(otherTraveler); 
console.log(otherTraveler.hasHomeLocation());
console.log(otherTraveler.getGreeting());
