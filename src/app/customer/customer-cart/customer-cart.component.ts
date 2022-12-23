import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-cart',
  templateUrl: './customer-cart.component.html',
  styleUrls: ['./customer-cart.component.css']
})
export class CustomerCartComponent implements OnInit {

  constructor(private cartService:CartService,private service:SharedService,private toastr:ToastrService,private router:Router) { }
  public product:any;
  public grandTotal:number=0;
  public orditem:any={}
  id=this.service.getadminid();
  ID = +this.id;
  public check = 0;
  public check2 = 0;
  public pays:boolean=false;



  ngOnInit(): void {
    this.refresh();
    if(this.pays){
this.addorders();}

    
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

  addorders(){
    if(this.pays){
    var x = this.product.length;
    console.log(x)
    this.check2 = x;
    this.check=0;

    


    for (let i = 0; i < x; i++) {

      var temp = this.product[i].quantity;
      var Temp = +temp;
      
      


      this.orditem={
        required_amount_kg:Temp,
        VegetableStocksId:this.product[i].vegetableStocksId,
        FarmerId:this.product[i].farmerId,
        CustomerId:this.ID
      }
      console.log(this.orditem)


      this.service.addorder(this.orditem).subscribe(data => {console.log(data);

        console.log("sucess");
        
         
        this.check++;
        console.log(this.check)
        if(this.check===this.check2){
          this.toastr.success( 'Orders added successfully and removed from cart to My orders!');
          this.cartService.removeAllCart();
          this.check = 0;
          
        }
        
        },
        
        error=>{console.log(error.status); 
        
        
        console.log(error)
        console.log("failed");
        this.toastr.error( 'Adding Orders failed');})
        this.check = 0;
    }

   //location.reload();
   this.router.navigate(["/customer/customer_order"]);
   this.pays=false;
  }
  }


  close(){
    this.addorders();

  }

  
}
