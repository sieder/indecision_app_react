
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += `Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        } 

        return greeting;
    }
}

const me = new Traveler('Sieder', 29, 'Computer Science', 'Makati');
console.log(me.getGreeting());

const me2 = new Traveler('Sieder', 29);
console.log(me2.getGreeting());

const other = new Student();
console.log(other.getDescription());

const template = (
    <div>
        <p>{me.getGreeting()}</p>    
    </div>

);

ReactDOM.render(template, document.getElementById('app'));
    