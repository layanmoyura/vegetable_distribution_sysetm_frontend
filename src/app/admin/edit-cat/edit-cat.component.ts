import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  constructor(private api:ApiService ,private router:Router,private shared:SharedService, private toastr:ToastrService) { }
  public ProductList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  aid:any[]=[];
  

  ngOnInit(): void {
    this.refresh();
    
  }

  refresh(){
    this.shared.getcat().subscribe(data=> {this.ProductList=data;
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
    this.toastr.error( 'Loading Categories failed');}
  );

  
   }

    getadminname(ID:any){

    this.shared.getadmin(ID).subscribe(data=>{ this.aid = data });
    console.log(this.aid)
    
   }


   Addproduct(){

    this.pro={
      VegetablesId:0,
      Vegtable_image:"",
      Name:"",
      Max_control_price_country:"",
      AdminId:0,
      Last_Updated_Time:""
    };
    console.log(this.pro)
    this.ActiveAddEditPro=true;

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

    console.log('edit ok')

    this.pro={
      VegetablesId:dataItem.vegetablesId,
      Vegtable_image:dataItem.vegtable_image,
      Name:dataItem.name,
      Max_control_price_country:dataItem.max_control_price_country,
      AdminId:dataItem.adminId,
      Last_Updated_Time:dataItem.last_Updated_Time

    }

    console.log(this.pro)
    this.ActiveAddEditPro=true;
  
  }

  closeClick(){
    this.refresh();
    this.ActiveAddEditPro=false;
    this.refresh();
    
  }
  
}
