import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-cat-show',
  templateUrl: './customer-cat-show.component.html',
  styleUrls: ['./customer-cat-show.component.css']
})
export class CustomerCatShowComponent implements OnInit {

  constructor(private api:ApiService ,private router:Router,private shared:SharedService, private toastr:ToastrService,private cartshear:CartService) { }
  public catList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  aid:any[]=[];
  searchKey:string="";
  

  ngOnInit(): void {
    this.refresh();
    this.cartshear.searchs.subscribe((val:any)=>{
      this.searchKey=val;
     }) ;
  }

  refresh(){
    this.shared.getcat().subscribe(data=> {this.catList=data;
    console.log(this.catList);
    
    if(this.catList.length==0){
  this.pro_null=true;
    }
    else{
      this.pro_null=false;
    }
  
  },
  error=>{console.log(error); 
    console.log("failed");
    this.toastr.error( 'Loading Categories failed');}
  );

  
   }



   click_cat(item:any){

    this.router.navigate(['/customer/products-show',item.vegetablesId]);
   console.log(item.vegetablesId);
     }

     click_All(){
      this.router.navigate(['/customer/products-show',0]);
    }

}



