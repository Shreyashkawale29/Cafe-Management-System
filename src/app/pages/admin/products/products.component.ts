import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  isSidePanelVisible = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImageUrl: '',
  };
  
  categoryList: any[] = [];
  productsList: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getAllCategory();
  }

  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      this.categoryList = res.data;
    });
  }

  onSave() {
    this.productService.saveProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Product saved successfully...');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productsList = res.data;
    });
  }

  

  onDelete(item: any) {
    const isDelete = confirm('Are you sure you want to delete this product?');
    if (isDelete) {
      this.productService.deleteProduct(item.productId).subscribe(
        (res: any) => {
          if (res.result) {
            alert('Product deleted successfully...');
            this.getProducts();
          } else {
            alert(res.message);
          }
        },
        (err) => {
          console.error("Error deleting product:", err);
          alert("Unable to delete product. Please ensure there are no references to this product.");
        }
      );
    }
  }

  onUpdate() {
    this.productService.updateProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if (res.result) {
        alert('Product Updated successfully...');
        this.getProducts();
      } else {
        alert(res.message);
      }
    });
  }

  onReset() {
    this.productObj = {
      productId: 0,
      productSku: "",
      productName: "",
      productPrice: 0,
      productShortName: "",
      productDescription: "",
      createdDate: new Date(),
      deliveryTimeSpan: "",
      categoryId: 0,
      productImageUrl: ""
    };

  }

  onEdit(item: any) {
    this.productObj = item;
    this.openSidePanel();
  }

  openSidePanel() {
    this.isSidePanelVisible = true;
  }

  closeSidePanel() {
    this.isSidePanelVisible = false;
  }
}
