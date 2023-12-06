//  1. Viết chương trình bằng JavaScript: Tạo một mảng products để lưu trữ các đối
// tượng product bao gồm các thông tin: productId, productName, price, image, description, createdAt. 
//Thực hiện các yêu cầu sau đây:
// a. Hiển thị danh sách sản phẩm 
// b. Thêm mới sản phẩm vào trong mảng (Kiểm tra dữ liệu đầu vào, id của sản phẩm không được trùng. Nếu trùng thì báo cho người dùng biết là “Id không được phép trùng”, ngày thêm phải format đúng định dạng khi thêm mới)
// c. Tìm kiếm sản phẩm theo tên
// d. Sắp xếp sản phẩm tăng dần theo giá
// e. Lọc ra những sản phẩm có giá lớn hơn 100.000đ


class Product {
    constructor(productId, productName, price, image, description, createdAt) {
      this.productId = productId;
      this.productName = productName;
      this.price = price;
      this.image = image;
      this.description = description;
      this.createdAt = createdAt;
    }
  }
  
  class ProductManager {
    constructor() {
      this.products = [];
    }
  
    displayProducts() {
      console.log("Danh sách sản phẩm:");
      this.products.forEach(product => {
        console.log(product);
      });
    }

    addProduct(newProduct) {
      const isDuplicateId = this.products.some(product => product.productId === newProduct.productId);
  
      if (isDuplicateId) {
        console.log("Id không được phép trùng");
      } else {
        // Format createdAt as per your requirement
        newProduct.createdAt = new Date().toISOString();
        this.products.push(newProduct);
        console.log("Sản phẩm đã được thêm mới thành công");
      }
    }
  
    searchProductByName(productName) {
      const foundProducts = this.products.filter(product => product.productName.toLowerCase().includes(productName.toLowerCase()));
  
      if (foundProducts.length > 0) {
        console.log("Sản phẩm được tìm thấy:");
        foundProducts.forEach(product => {
          console.log(product);
        });
      } else {
        console.log("Không tìm thấy sản phẩm nào có tên như vậy");
      }
    }
  
    sortProductsByPrice() {
      this.products.sort((a, b) => a.price - b.price);
      console.log("Sản phẩm đã được sắp xếp tăng dần theo giá:");
      this.displayProducts();
    }
  
    filterProductsByPrice(minPrice) {
      const filteredProducts = this.products.filter(product => product.price > minPrice);
  
      if (filteredProducts.length > 0) {
        console.log("Sản phẩm có giá lớn hơn 100.000đ:");
        filteredProducts.forEach(product => {
          console.log(product);
        });
      } else {
        console.log("Không có sản phẩm nào có giá lớn hơn 100.000đ");
      }
    }
  }
  
  // Example usage
  const productManager = new ProductManager();
  
  const product1 = new Product(1, "Product A", 120000, "image1.jpg", "Description A", "");
  const product2 = new Product(2, "Product B", 80000, "image2.jpg", "Description B", "");
  
  productManager.addProduct(product1);
  productManager.addProduct(product2);
  productManager.displayProducts();
  
  productManager.searchProductByName("B");
  productManager.sortProductsByPrice();
  productManager.filterProductsByPrice(100000);