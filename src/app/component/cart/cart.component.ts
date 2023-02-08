import { CartService } from 'src/app/service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
public product:any=[];
public grandtotal!:number;
constructor (public CartService:CartService){}

ngOnInit(): void {
  this.CartService.getProducts()
  .subscribe(res=>{
    this.product=res;
    this.grandtotal=this.CartService.getTotalPrice()
    
  })
}
removeiteam(iteam:any){
  this.CartService.removeCartItem(iteam);
 
}
emptycart(){
  this.CartService.removeAllCart()
}
}
