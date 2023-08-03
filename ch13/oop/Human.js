class Humans {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    info() {
        return console.log(this);
    }
}


class Teacher extends Humans {
    constructor(name, age, gender, subject, grade) {
        super(name, age, gender);
        this.subject = subject;
        this.grade = grade;
    }
}

let Gaurav = new Teacher('Gaurav', 24, 'Male');
let Nishi = new Teacher('Nishi', 23, 'Female');

Gaurav.info();
Nishi.info();