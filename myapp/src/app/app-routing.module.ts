import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ListprodComponent } from './components/listprod/listprod.component';

const routes: Routes = [
  {path:'',component:ListprodComponent},
  {path:'createproduct',component:CreateproductComponent},
  {path:'editproduct/:id',component:CreateproductComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
