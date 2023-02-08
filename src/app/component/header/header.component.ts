import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
itemnumber :number=0;
constructor (public cartservices:CartService){}

ngOnInit(): void {
this.cartservices.getProducts()
.subscribe(res=>{
this.itemnumber=res.length})

}

}
