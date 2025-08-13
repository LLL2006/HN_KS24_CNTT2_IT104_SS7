abstract class Animal {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract makeNoise(): void;
    printName(): void {
        console.log(`${this.name}`);
    }
}

class Cat extends Animal {
    makeNoise(): void {
        console.log("meo meo");
    }
}

class Dog extends Animal {
    makeNoise(): void {
        console.log("gâu gâu");
    }
}

const Meo = new Cat("Quang");
Meo.makeNoise();
Meo.printName();

const Cho = new Dog("Hưng");
Cho.makeNoise();
Cho.printName();