import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

Url='http://localhost:4000/api/products/';

  constructor(private http:HttpClient) { }
  getProd():Observable<any>{
   return this.http.get(this.Url);
  }
  suppProduct(id:string): Observable<any>{
return this.http.delete(this.Url+id);
  }
  createProduct(product:Product): Observable<any>{
return this.http.post(this.Url,product);
  }
  obtenirProduct(id: string):Observable<any>{
return this.http.get(this.Url+id);
  }
  editproduct(id:string,product:Product): Observable<any>{
    return this.http.put(this.Url+ id, product);

  }
}
