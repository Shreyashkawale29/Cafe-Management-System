import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http: HttpClient) { }

getCategory(){
  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
  
}

getProductsByCategory(id:number){
  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT_BY_CATEGORY + id);
  
}

saveProduct(obj: any){
  return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj);
}

getProducts(){
  return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCT);
}

updateProduct(obj: any){
  return this.http.put(Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT,obj);
}

deleteProduct(productId: any){
  return this.http.delete(Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + productId);
}


}


