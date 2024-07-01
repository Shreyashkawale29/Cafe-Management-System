import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {

  products:any []=[];
  activeCategoryId: number = 0;
  constructor(private activeRoute: ActivatedRoute, private productService: ProductService){

    this.activeRoute.params.subscribe((res:any) =>{
      this.activeCategoryId = res.id;
      this.loadProducts();
    });
  }

  loadProducts(){
    this.productService.getProductsByCategory(this.activeCategoryId).subscribe((res:any) =>{
    this.products = res.data;
    });
  }

}
