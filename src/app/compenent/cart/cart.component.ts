import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
public products :any = [];
public grandtotal :number =0;
constructor( private carteservice :CartService){}

ngOnInit(): void {
  this.carteservice.getProducts()
      .subscribe(res=> {
        this.products = res;
        this.grandtotal = this.carteservice.getTotalprice();
      });
  }
  removeitem(item :any){
    this.carteservice.removecartitem(item);

  }
  emptycard(){
    this.carteservice.removeAllcart();
  }
}

