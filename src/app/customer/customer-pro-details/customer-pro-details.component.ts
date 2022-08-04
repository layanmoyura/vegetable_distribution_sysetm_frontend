import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

import { Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable, Subscriber } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-customer-pro-details',
  templateUrl: './customer-pro-details.component.html',
  styleUrls: ['./customer-pro-details.component.css']
})
export class CustomerProDetailsComponent implements OnInit {

  id=this.shared.getadminid();
  ID = +this.id;
  public productlist:any;
  public productLis:any;


  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });
  submitted=false;

  constructor(private formBuilder:UntypedFormBuilder,private shared:SharedService,private toastr:ToastrService,private cartService:CartService) { }

@Input() farm:any;
@Input() prod:any;


  ngOnInit(): void {

    




    this.form = this.formBuilder.group(
      {

       
        required_amount_kg: [
          '',
          [
            Validators.required
            
          ]
        ],

        VegetableStocksId: [

        ],


        FarmerId: [
          
        ],


        CustomerId: [
          
        ],

        

      },

    );


  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  /*onSubmit():void{

    
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.prod.stockId)
    
    var x = this.form.value.required_amount_kg
    var y:number = +x

    this.form.patchValue({
      required_amount_kg:y,
      VegetableStocksId:this.prod.stockId,
      FarmerId:this.prod.farmerId,
      CustomerId:this.ID
    })

    console.log(this.form.value)
    this.shared.addorder(this.form.value).subscribe(
        
      data => {console.log(data);

      console.log("sucess");
      this.form.reset()
      this.submitted = false;
      this.toastr.success( 'Order is added!'); 
      
      
      },
      
      error=>{console.log(error.status); 
      if(error.status == 411){
        console.log("failed");
        this.toastr.error( 'Amount cannot be suplied');
      }  
      else{
      console.log(error)
      console.log("failed");
      this.toastr.error( 'Adding Order failed');}});
  

      
  }*/
addtocart(){
  if(this.form.value.required_amount_kg<=this.prod.amount){
    console.log(this.form.value.required_amount_kg);
this.prod.quantity=this.form.value.required_amount_kg;
this.prod.total=(this.form.value.required_amount_kg*this.prod.farmers_price_per_kg);


this.shared.getcat().subscribe(data=> {
  this.productLis=data,

  this.productLis.forEach((item:any)=>{
  
    if(item.vegetablesId==this.prod.vegetablesId){
    this.prod.name=item.name;
console.log(item.name);
    }
  })});





this.cartService.addtoCart(this.prod);

  console.log(this.prod);
  this.toastr.success('Added to cart!')
}

  else{
    this.toastr.error( 'Requested amount is not available');
   
  }
}
  

}