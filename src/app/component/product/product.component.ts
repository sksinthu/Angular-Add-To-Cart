import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
constructor(private api:ApiService,public cart:CartService){}
productlist!:any;

ngOnInit():void{
  this.api.getProduct()
  .subscribe(res=>{
    this.productlist=res;

    this.productlist.forEach((a:any) => {
      Object.assign(a,{quantity:1,total:a.price})
    });
  })
}
addTocart( iteam:any){
this.cart.addtoCart(iteam);
}
}
