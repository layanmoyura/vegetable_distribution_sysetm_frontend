import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { data } from 'autoprefixer';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {

  CategoryList:any=[];
  OrderList:any=[];
  StockList:any=[];
  id=this.shared.getadminid();
  ID = +this.id;
  pro_null=true;
  img:any
  val:any={}

  constructor(private shared:SharedService,private toast:ToastrService) { }

  ngOnInit(): void {

    this.refresh();
    

   
    
  }

  adddel(item:any){
    this.val={
        customer: null,
        customerId: 8,
        deadline: null,
        farmer: null,
        farmerId: 2,
        orderId: 1,
        progress: 1,
        required_amount_kg: 5,
        supplied_or_not: true,
        vegetableStock: null,
        vegetableStocksId: 7
    }
    console.log(this.val)
    this.shared.updorder(item.orderId,this.val).subscribe(response=>{
      this.toast.success('Proceed to Delivery')
      console.log(response)
      this.refresh()
    },
    error=>{this.toast.error('Updating failed')})
  }

  refresh(){
    this.shared.getorder(this.ID).subscribe(
      data=>{console.log(data); this.pro_null = false;
      this.OrderList = data;
      console.log(this.OrderList)
      
     
      
      
      }
    
      
      
      ,
    
    error=>{this.toast.error( 'Loading Orders failed')}
    )
  }
  


}
