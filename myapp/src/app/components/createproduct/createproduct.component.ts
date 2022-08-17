import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
  //prepertybinding
productForm:FormGroup;

titre='Create Product';
id: string | null;
  constructor(private fb:FormBuilder, private router:Router,private toastr: ToastrService, private aRouter: ActivatedRoute, private productsService:ProductsService) { 
    this.productForm=this.fb.group({
      product:['',Validators.required],
      Nameprod:['',Validators.required],
      quantity:['',Validators.required],
      prix:['',Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.Edit();
  }
  aggregateproduct(){
const Prod:Product={
  product:this.productForm.get('product')?.value,
  Nameprod: this.productForm.get('Nameprod')?.value,
  quantity: this.productForm.get('quantity')?.value,
  prix: this.productForm.get('prix')?.value,
}
console.log(Prod);
if(this.id!==null){
this.productsService.editproduct(this.id,Prod).subscribe(data=>{
  this.toastr.info('le produit a ete enregistrer !', 'le produit ete enregistrer!');
  this.router.navigate(['/']);
}, error=>{
  console.log(error);
    this.productForm.reset();
})
}
else{
  this.productsService.createProduct(Prod).subscribe(data => {
  this.toastr.success('le produit exist!', 'le produit est enregistre');
  this.router.navigate(['/']);
    },error=>{
      console.log(error);
        this.productForm.reset();
   })}
}
Edit(){
if(this.id!==null){
  this.titre='Update Prod';
  this.productsService.obtenirProduct(this.id).subscribe(data=>{
    this.productForm.setValue({
      product:data.product,
      Nameprod:data.Nameprod,
      quantity:data.quantity,
      prix:data.prix
    })
  })
}
}
}