class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    addReply(reply: Comment) {
        this.replies.push(reply);
    }
}

class Post {
    public id: number;
    public likes: number[];
    public comments: Comment[];
    public userId: number;
    public content: string;

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.likes = [];
        this.comments = [];
    }

    addLike(userId: number) {
        if (!this.likes.includes(userId)) {
            this.likes.push(userId);
        }
    }

    addComment(comment: Comment) {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    createPost(content: string) {
        const postId = this.posts.length + 1;
        const newPost = new Post(postId, this.id, content);
        this.posts.push(newPost);
    }

    comment(postId: number, commentContent: string) {
        let post = this.posts.find(p => p.id === postId);

        if (!post) {
            for (let u of this.followers) {
                post = u.posts.find(p => p.id === postId);
                if (post) break;
            }
        }

        if (post) {
            const commentId = post.comments.length + 1;
            const newComment = new Comment(commentId, this.id, commentContent);
            post.addComment(newComment);
        }
    }

    follow(user: User) {
        if (!this.followers.includes(user)) {
            this.followers.push(user);
        }
    }

    likePost(postId: number) {
        for (let u of [this, ...this.followers]) {
            const post = u.posts.find(p => p.id === postId);
            if (post) {
                post.addLike(this.id);
                break;
            }
        }
    }

    viewFeed() {
        console.log(`Feed của user ${this.id}:`);
        for (let user of this.followers) {
            for (let post of user.posts) {
                console.log(`User ${user.id} đăng: ${post.content} (likes: ${post.likes.length})`);
            }
        }
    }
}

const user1 = new User(1);
const user2 = new User(2);
const user3 = new User(3);

user1.follow(user2);
user1.follow(user3);

user2.createPost("Đây là post của user2");
user3.createPost("Postv của user3");

user1.viewFeed();

user1.likePost(1);

user1.comment(1, "Ổn't");

user1.viewFeed();
