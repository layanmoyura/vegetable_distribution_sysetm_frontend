import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-farmer-editproduct',
  templateUrl: './farmer-editproduct.component.html',
  styleUrls: ['./farmer-editproduct.component.css']
})
export class FarmerEditproductComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService,private user:SharedService) { }
  public ProductList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  id=this.user.getadminid();
  ID = +this.id;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.user.getprodfar(this.ID).subscribe(data=> {this.ProductList=data;
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
    console.log('d ok')
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
