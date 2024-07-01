import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  

  products$:Observable<any>;
  constructor(private productservice: ProductService){

    this.products$ = this.productservice.getCategory().pipe(
    map((item:any)=>{
      return item.data;
    })
  );
  }

  getAllCategory(){

  }

}
