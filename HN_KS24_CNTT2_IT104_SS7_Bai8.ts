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

class CheckingAccount extends Account {
    overdraftLimit: number;
    constructor(accountNumber: number, balance: number, status: string, overdraftLimit: number) {
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(money: number): void {
        if(money <= this.balance + this.overdraftLimit) {
            this.balance -= money;
            this.history.push(`Rút ${money}, Số dư: ${this.balance}`);
            console.log("Rút tiền thành công");   
        } else {
            console.log("Vượt hạn mức");
            
        }
    }
}

const checkAcc =  new CheckingAccount(202, 2000, "active", 500);
checkAcc.deposit(300);
checkAcc.withdraw(1200);
checkAcc.withdraw(700);
checkAcc.withdraw(800);

checkAcc.showHistory();