import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-products',
  templateUrl: './web-products.component.html',
  standalone: true,
  imports : [CommonModule],
  styleUrls: ['./web-products.component.css']
})
export class WebProductsComponent implements OnInit {

  productList:any []=[];
  categoryList:any[]=[];
  constructor(private productService: ProductService, private router: Router){
  }

  ngOnInit(): void{
    this.getAllProduct();
    this.getAllCategory();

  }

  getAllProduct(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.productList = res.data;
    });
  }

  getAllCategory(){
    this.productService.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    });
  }

  navigateToProducts(id:number){
    this.router.navigate(['/products',id]);
  }

}
