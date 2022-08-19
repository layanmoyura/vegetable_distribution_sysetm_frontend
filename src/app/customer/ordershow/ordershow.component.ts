import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ordershow',
  templateUrl: './ordershow.component.html',
  styleUrls: ['./ordershow.component.css']
})
export class OrdershowComponent implements OnInit {

  constructor(private api:ApiService ,private router:Router,private shared:SharedService, private toastr:ToastrService) { }

  public ProductList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  aid:any[]=[];
  cus:any[]=[];
  farm:any[]=[];
  ord:any[]=[];
  id=this.shared.getadminid();
  ID = +this.id;
  size:any;
  

  ngOnInit(): void {
    this.refresh();
    
  }

  refresh(){
    this.shared.getorderadmin().subscribe(data=> {this.ProductList=data;
      this.ProductList.length = this.size;
    console.log(this.ProductList);
    
    if(this.ProductList.length==0){
  this.pro_null=true;
    }
    else{
      this.pro_null=false;
    }
  
  },
  error=>{console.log(error); 
    console.log("failed");
    this.toastr.error( 'Loading Orders failed');}
  );

  
   }

    


   



   
  delete(item:any){
    console.log(item.vegetablesId)
    this.shared.delcat(item.vegetablesId).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      
      this.toastr.success( 'Category is deleted!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Deleting Category failed');});
  }

  

  clickItem(dataItem:any){

    this.shared.getorderbyid(dataItem.orderId).subscribe(data=>{this.ord=data;
    
      this.shared.getcus(dataItem.customerId).subscribe(data=>{this.cus=data; 
        console.log(data);
        this.shared.getfarm(dataItem.farmerId).subscribe(data=>{this.farm=data; 
          console.log(data);
          this.pro={
            from:this.cus[0].living_City,
            to:this.farm[0].living_city,
            delivered_or_not:false,
            AdminId:this.ID,
            OrderId:dataItem.orderId,
            status:this.ord[0].progress
      
          }
      
          console.log(this.pro)
          this.ActiveAddEditPro=true;
        })
      })
    
    })

    console.log('edit ok')

    
    

   
  
  }

  closeClick(){
    this.refresh();
    this.ActiveAddEditPro=false;
    this.refresh();
    
  }
}

