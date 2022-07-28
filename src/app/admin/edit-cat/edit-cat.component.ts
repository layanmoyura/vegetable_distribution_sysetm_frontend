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
  
  });
   }


   Addproduct(){
       
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
    
  
  }

  closeClick(){
    this.refresh();
    this.ActiveAddEditPro=false;
    this.refresh();
    
  }
  
}
