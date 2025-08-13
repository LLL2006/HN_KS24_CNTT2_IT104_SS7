class Employee {
    public name: string;
    protected company: string;
    private phone: number;

    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo(): void {
        console.log(`Tên nhân viên: ${this.name}, Tên công ty: ${this.company}, SĐT: ${this.phone} `);
    }
}

class Manager extends Employee {
    private teamSize: number;
    constructor(name: string, company: string, phone: number, teamSize: number) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo();
        console.log(`Số lượng thành viên: ${this.teamSize}`);
    }
}

const Emp = new Employee("Nguyễn Văn A", "RK", 1234567890);
Emp.printInfo();

const Mng = new Manager("Bùi Thị C", "FPT", 993249092, 5);
Mng.printInfo();