import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';

import { Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable, Subscriber } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { data } from 'autoprefixer';


@Component({
  selector: 'app-orderdet',
  templateUrl: './orderdet.component.html',
  styleUrls: ['./orderdet.component.css']
})
export class OrderdetComponent implements OnInit {
  id=this.shared.getadminid();
  ID = +this.id;
  public prouctlist:any;
  public prouctLis:any;
  public coulist:any;


  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });
  submitted=false;
  constructor(private formBuilder:UntypedFormBuilder,private shared:SharedService,private toastr:ToastrService,private cartService:CartService) { }


@Input() pro:any;


  ngOnInit(): void {
    
    this.shared.getcou().subscribe(data=>{this.coulist=data})
    




    this.form = this.formBuilder.group(
      {

       
        VehiclId: [
          '',
          [
            Validators.required
            
          ]
        ],

        AdminId: [

        ],


        OrderId: [
          
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
    console.log(this.pro.stockId)
    
    var x = this.form.value.required_amount_kg
    var y:number = +x

    this.form.patchValue({
      required_amount_kg:y,
      VegetableStocksId:this.pro.stockId,
      FarmerId:this.pro.farmerId,
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
  if(this.form.value.required_amount_kg<=this.pro.amount){
    console.log(this.form.value.required_amount_kg);
this.pro.quantity=this.form.value.required_amount_kg;
this.pro.total=(this.form.value.required_amount_kg*this.pro.farmers_price_per_kg);


this.shared.getcat().subscribe(data=> {
  this.prouctLis=data,

  this.prouctLis.forEach((item:any)=>{
  
    if(item.vegetablesId==this.pro.vegetablesId){
    this.pro.name=item.name;
console.log(item.name);
    }
  })});





this.cartService.addtoCart(this.pro);

  console.log(this.pro);
  this.toastr.success('Added to cart!')
}

  else{
    this.toastr.error( 'Requested amount is not available');
   
  }
}
}
