class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: number, balance: number, status: string) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }

    deposit(money: number): void {
        this.balance += money;
        this.history.push(`Nạp ${money}, Số dư: ${this.balance}`);
        console.log("Nạp tiền thành công");
        
    }
    withdraw(money: number): void {
        if(money < this.balance) {
            this.balance -= money;
            this.history.push(`Rút ${money}, Số dư: ${this.balance}`);
            console.log("Rút tiền thành công");
        } else {
            console.log("Số dư không đủ");
            
        }
        
        
    }
    showHistory(): void {
        console.log(`Lịch sử giao dich ${this.accountNumber}: `);
        this.history.forEach((h, i) => console.log(`${i+1}. ${h}`));
        
    }
}

class SavingAccount extends Account {
    interestRate: number;
    constructor(accountNumber: number, balance: number, status: string, interestRate: number) {
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }

    withdraw(money: number): void {
        if(money >= this.balance) {
            this.history.push(`Rút ${this.balance}, Số dư: 0`);
            this.balance = 0;
            console.log("Rút hết tiền trong tài khoản");   
        } else {
            this.balance -= money;
            this.history.push(`Rút ${money}, Số dư: ${this.balance}`);
                    console.log("Rút tiền thành công");
        }
    }
}

const myAcc =  new SavingAccount(1, 2000, "active", 0.05);
myAcc.deposit(500);
myAcc.withdraw(200);
myAcc.withdraw(2000);

myAcc.showHistory();