class Vehicle {
    protected name: string;
    protected speed: number
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    slowDown(amount: number): void{
        this.speed -= amount;
    }
    showSpeed(): void{
        console.log(`Tốc độ hiện tại: ${this.speed}`);
    }
}

class Bicycle extends Vehicle {
    private gear: number;
    constructor(name: string, speed: number, id: number, gear: number){
        super(name, speed, id);
        this.gear = gear;
    } 

    printInfo(): void {
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Id: ${this.id}, Gear: ${this.gear}`);
    }
}

const Bic = new Bicycle("Xe thể thao", 20, 101, 3);
Bic.speedUp(20);
Bic.showSpeed();
Bic.slowDown(30);
Bic.showSpeed();

Bic.printInfo();