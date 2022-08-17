export class Product{
    _id?:number;
    product:string;
    Nameprod:string;
    quantity:number;
    prix:number;
    constructor(quantity: number,prix:number,Nameprod:string,product:string){
      this.product=product;
      this.Nameprod=Nameprod;
      this.quantity=quantity;
      this.prix=prix;
      
    }
}