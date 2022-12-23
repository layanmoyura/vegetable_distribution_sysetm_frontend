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
  selector: 'app-customer-pro-show',
  templateUrl: './customer-pro-show.component.html',
  styleUrls: ['./customer-pro-show.component.css']
})
export class CustomerProShowComponent implements OnInit {

  constructor(private service:SharedService,private arouter:ActivatedRoute,private router:Router,private cartshear:CartService) { }
  productList:any[]=[];
  cat_id:number=0;
  prdlist:any[]=[];
  y:number=0;
  searchKey:any="";
  Activtall:boolean=false;
  Activepart:boolean=true;
  resultItem:boolean=false ;
 public Activedetail:boolean=false;
  Modal_title:string="";
  public prod:any={};
  public cat:any={};
  farmerlist:any[]=[];
  cat_name:any;
  public farm:any={};

  ngOnInit(): void {


    var id:any= this.arouter.snapshot.paramMap.get('id');
    this.cat_id=parseInt(id);
     if(this.cat_id==0){
       this.Activtall=true;
       this.Activepart=false;
     }
    
    
    this.service.getpro().subscribe(data=> {
      this.productList=data,

      

      this.productList.forEach((item:any)=>{
        console.log(this.y);
        if(item.vegetablesId==this.cat_id){
           this.prdlist[this.y]=item;
           this.y++;
        }

        if(this.cat_id==0){
          this.prdlist[this.y]=item;
           this.y++; 
        }

        

     });

    
     if(this.prdlist.length==0){
      this.resultItem=true;
     }
    
    
      console.log(this.productList.length);

      this.productList.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.farmers_price_per_kg,Cname:"no"})
        });
   
  });


 this.cartshear.searchs.subscribe((val:any)=>{
  this.searchKey=val;
 }) ;
   

  
  }

  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });


  onproduct(item:any){
       
    

    this.service.getfarm(item.farmerId).subscribe( data=>{this.farmerlist =data;

    
      
      console.log(this.farmerlist)
      
      /////////////
      
      this.prod=item;
      this.prod.f=this.farmerlist[0].firstName;
      this.prod.living_city=this.farmerlist[0].living_City;
      
      this.prod.farmerId=this.farmerlist[0].roleId;
      

      
  })


  this.Activedetail=true;
  this.Modal_title= "Product details";

      
 ////////////
    
  }

  closeClick(){
    
    this.Activedetail=false;
  
    
  }



}
