import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

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
