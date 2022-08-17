import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import { ListprodComponent } from './components/listprod/listprod.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule}from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateproductComponent,
    ListprodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
