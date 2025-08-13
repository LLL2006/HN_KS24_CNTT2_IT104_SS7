abstract class Person {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    displayInfo(): void{
        console.log(`Tên: ${this.name}`);
        
    }
}

class Student extends Person {
    private id: string;

    constructor(name: string, id: string) {
        super(name);
        this.id = id
    }
    displayInfo(): void {
        console.log(`Tên: ${this.name}, Id: ${this.id}`);
    }
}

class Teacher extends Person {
    private subject: string;
    constructor(name: string, subject: string) {
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên: ${this.name}, Môn học: ${this.subject} `);
    }
}

const hs = new Student("Loi", "L01");
hs.displayInfo();

const gv = new Teacher("An", "GV01");
gv.displayInfo();