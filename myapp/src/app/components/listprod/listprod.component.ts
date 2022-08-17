import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-listprod',
  templateUrl: './listprod.component.html',
  styleUrls: ['./listprod.component.css']
})
export class ListprodComponent implements OnInit {
 listProd:Product []= [];
//  DataArray: any = [];
constructor(private productsService:ProductsService,private toast:ToastrService ) { }

ngOnInit(): void {
    this.obtenirProducts();

  }
  obtenirProducts(){
  this.productsService.getProd().subscribe(data=>{
  this.listProd=data.products;
  
  },error=>{
    console.log(error);
  })
}
suppProduct(id:any){
  console.log('message '+id);
  
this.productsService.suppProduct(id).subscribe(data=>{
this.toast.error('eliminer le produit','Produit est eliminé');
this.obtenirProducts();
},error=>{
  console.log(error);
})
}
}
