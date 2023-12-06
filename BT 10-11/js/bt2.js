// 1. Viết chương trình bằng JavaScript: Tạo một mảng users, và xây dựng đối tượng user bao gồm các trường sau: userId, userName, gender, email, password, createdAt. Thực hiện các yêu cầu sau:
// a. Thêm mới user vào trong mảng (Kiểm tra định dạng email, mật khẩu phải lớn hơn 8 ký tự, format ngày tháng)
// b. Hiển thị danh sách user trong màn hình console.log()
// c. Thực hiện chức năng tìm kiếm user theo tên hoặc email
// d. Xây dựng tính năng đăng nhập. Thực hiện tìm kiếm thông tin user theo email và password. Nếu như thỏa mãn điều kiện thì hiển thị thông báo là “Đăng nhập thành công”. Nếu như sau email hoặc mật khẩu thì thông báo “Đăng nhập thất bại”


class User {
    constructor(userId, userName, gender, email, password, createdAt) {
      this.userId = userId;
      this.userName = userName;
      this.gender = gender;
      this.email = email;
      this.password = password;
      this.createdAt = createdAt;
    }
  }
  
  class UserManager {
    constructor() {
      this.users = [];
    }
  
    addUser(newUser) {
      const isEmailValid = this.validateEmail(newUser.email);
      const isPasswordValid = this.validatePassword(newUser.password);
  
      if (!isEmailValid) {
        console.log("Định dạng email không hợp lệ");
      } else if (!isPasswordValid) {
        console.log("Mật khẩu phải có ít nhất 8 ký tự");
      } else {
        // Format createdAt as per your requirement
        newUser.createdAt = new Date().toISOString();
        this.users.push(newUser);
        console.log("Người dùng đã được thêm mới thành công");
      }
    }
    
    displayUsers() {
      console.log("Danh sách người dùng:");
      this.users.forEach(user => {
        console.log(user);
      });
    }
    
    searchUser(query) {
      const foundUsers = this.users.filter(
        user => user.userName.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase())
      );
        
      if (foundUsers.length > 0) {
        console.log("Người dùng được tìm thấy:");
        foundUsers.forEach(user => {
          console.log(user);
        });
      } else 
      {
        // console.log("Không tìm thấy người dùng nào");
      }
    }
  
    
    login(email, password) {
      const foundUser = this.users.find(user => user.email === email && user.password === password);
  
      if (foundUser) {
        console.log("Đăng nhập thành công");
      } else {
        console.log("Đăng nhập thất bại");
      }
    }
  
    validateEmail(email) {
      // Your email validation logic here
      // Example: Check if the email contains "@" and "."
      return /\S+@\S+\.\S+/.test(email);
    }
  
    validatePassword(password) {
      // Your password validation logic here
      // Example: Check if the password has at least 8 characters
      return password.length >= 8;
    }
  }
  
  // Example usage
  const userManager = new UserManager();
  
  const user1 = new User(1, "User A", "Male", "usera@example.com", "password123", "");
  const user2 = new User(2, "User B", "Female", "userb@example.com", "pass123", "");
  
  userManager.addUser(user1);
  userManager.addUser(user2);
  userManager.displayUsers();
  
  userManager.searchUser("User");
  userManager.searchUser("userb@example.com");
  
  userManager.login("usera@example.com", "password123");
  userManager.login("userb@example.com", "wrongpassword");