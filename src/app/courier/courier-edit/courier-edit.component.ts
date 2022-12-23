import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-courier-edit',
  templateUrl: './courier-edit.component.html',
  styleUrls: ['./courier-edit.component.css']
})
export class CourierEditComponent implements OnInit {

  constructor(private api:ApiService ,private router:Router,private shared:SharedService, private toastr:ToastrService) { }

  public ProductList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  aid:any[]=[];
  cus:any[]=[];
  farm:any[]=[];
  ord:any[]=[];
  id= this.shared.getadminid();
  ID = +this.id;
  accept:boolean=true;
  del:boolean=false;
  aid2:any[]=[];
  

  ngOnInit(): void {
    this.refresh();
    
  }

  refresh(){
    this.shared.getcoubyid(this.ID).subscribe(data=> {this.ProductList=data;
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

    


   clickItem0(dataItem:any){
 

    this.shared.getorderbyid(dataItem.orderId).subscribe(data=>{
      this.aid2=data;
      console.log(this.aid2);
      
    });
    

    /*this.shared.getorderbyid(dataItem.orderId).subscribe(data=>{this.ord=data;
    
      this.shared.getcus(dataItem.customerId).subscribe(data=>{this.cus=data; 
        console.log(data);
        this.shared.getfarm(dataItem.farmerId).subscribe(data=>{this.farm=data; 
          console.log(data);
          this.pro={
            from:this.cus[0].living_City,
            to:this.farm[0].living_City,
            delivered_or_not:false,
            AdminId:this.ID,
            OrderId:dataItem.orderId,
            status:this.ord[0].progress
      
          }
      
          console.log(this.pro)
          this.ActiveAddEditPro=true;
        })
      })
    
    })*/

    this.shared.updatedel0(dataItem.orderId,3).subscribe(data=>{
      this.toastr.success( 'Delivery Status Updated');

    },
    error=>{
      this.toastr.error( 'Updating delivery status failed');
      console.log(error);
    }
    
    )

    console.log('edit ok')
    this.refresh();

    
    

   
  
  }



   
  
  

  clickItem(dataItem:any){

    /*this.shared.getorderbyid(dataItem.orderId).subscribe(data=>{this.ord=data;
    
      this.shared.getcus(dataItem.customerId).subscribe(data=>{this.cus=data; 
        console.log(data);
        this.shared.getfarm(dataItem.farmerId).subscribe(data=>{this.farm=data; 
          console.log(data);
          this.pro={
            from:this.cus[0].living_City,
            to:this.farm[0].living_City,
            delivered_or_not:false,
            AdminId:this.ID,
            OrderId:dataItem.orderId,
            status:this.ord[0].progress
      
          }
      
          console.log(this.pro)
          this.ActiveAddEditPro=true;
        })
      })
    
    })*/

    this.shared.updatedel(dataItem.orderId,3).subscribe(data=>{
      this.shared.confirmdel(dataItem.deliveryId,3).subscribe(data=>{
        this.toastr.success( 'Delivery Status Updated');
        
      },
      error=>{
        this.toastr.error( 'Updating delivery status failed');
        console.log(error);
      });
    },
    error=>{
      this.toastr.error( 'Updating delivery status failed');
      console.log(error);
    }
    
    )

    console.log('edit ok')
    this.refresh();

    
    

   
  
  }

  closeClick(){
    this.refresh();
    this.ActiveAddEditPro=false;
    this.refresh();
    
  }

}
