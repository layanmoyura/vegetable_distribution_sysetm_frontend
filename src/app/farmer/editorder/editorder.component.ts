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

  constructor(private shared:SharedService,private toast:ToastrService) { }

  ngOnInit(): void {
    this.shared.getorder(this.ID).subscribe(
      data=>{console.log(data); this.pro_null = false;
      this.OrderList = data;
      console.log(this.OrderList)
      
     
      
      
      }
    
      
      
      ,
    
    error=>{this.toast.error( 'Loading Orders failed')}
    )

   
    console.log(this.OrderList)
  }

  stockimage(item:any){
    this.shared.getstockimg(item.vegetableStocksId).subscribe(data=>this.img=data)
    console.log(this.img)
  }

  


}
