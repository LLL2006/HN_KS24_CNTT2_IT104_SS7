class Account {
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = isLogin;
        this.role = role;
    }
    login(): void{
        this.isLogin = false;
    }
    logout(): void {
        if(this.isLogin === true) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
    getId(): number {
        return this.id;
    }
}



class userAcc extends Account {
    status: string;
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string, status: string) {
        super(id, userName, password, isLogin, role);
        this.status = status;
    }

    login(): void {
        if(this.status === "active") {
            console.log("Đăng nhập thành công");
            this.isLogin = true;
        } else if(this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

class Admin extends Account {
    constructor(id: number, userName: string, password: string, isLogin: boolean, role: string) {
        super(id, userName, password, isLogin, role);
    }

    banUser(userId: number, allUser: userAcc[]): void {
        const user = allUser.find(u => u.getId() === userId);
        if(user) {
            user.status = "banned";
        }else {
            console.log("Không tìm thấy ng dùng");
            
        }
    }
}

let allUser: userAcc[] = [];

let user1 = new userAcc(1, "A", "pwA", false, "user", "active");
let user2 = new userAcc(2, "B", "pwB", false, "user", "active");

allUser.push(user1, user2);

let admin = new Admin(10, "C", "pwC", false , "admin");

user1.login();
user2.login();

admin.banUser(2, allUser);

user1.login();
user2.login();
