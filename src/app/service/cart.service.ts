import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitemlist :any =[]
  public productlist=new BehaviorSubject<any>([]);
  public search= new BehaviorSubject<string>("");

  constructor() { }
  updateProducts(newProducts: any[]): void {
    this.productlist.next(newProducts);
  }
  getProducts() : Observable<any[]>{
    return this.productlist.asObservable();  
  }
  setProducts(product :any){
    this.cartitemlist.push(...product); 
    this.productlist.next(product);

  }
  addtocart(product:any){
    this.cartitemlist.push(product);
    this.productlist.next(this.cartitemlist);
    this.getTotalprice();
    console.log(this.cartitemlist)
  }
  getTotalprice() :number{
    let grandtotal= 0;
    this.cartitemlist.map((a:any)=>{
      grandtotal += a.total;  
    })
    return grandtotal;
  }
  removecartitem(product:any){
   this.cartitemlist.map((a:any, index:any)=>{
    if(product.id=== a.id){
      this.cartitemlist.splice(index,1);
    }
   })
   this.productlist.next(this.cartitemlist);
  }
  removeAllcart(){
    this.cartitemlist=[]
    this.productlist.next(this.cartitemlist);
  }
}
