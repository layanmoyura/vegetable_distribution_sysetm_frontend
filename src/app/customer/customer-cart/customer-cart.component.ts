import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {

  constructor(private cartService:CartService,private service:SharedService) { }
  public product:any;
  public grandTotal:number=0;




  ngOnInit(): void {

 this.refresh();
    
  }

  refresh(){
    this.cartService.getProduct().subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();

       });
  }

  removeIteam(item:any){
    this.cartService.removeCartItem(item);
    this.refresh();
  }
  emptycart(){
    this.cartService.removeAllCart();
    this.refresh();
  }





}
