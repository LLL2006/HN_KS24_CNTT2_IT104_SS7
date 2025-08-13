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

const user = new userAcc(101, "Loi", "L2006", false, "manager", "active");
user.login();
user.logout();