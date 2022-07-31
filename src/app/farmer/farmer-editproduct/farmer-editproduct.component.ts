import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { SharedService } from 'src/app/shared.service';
import { ToastrService } from 'ngx-toastr';
import { data } from 'autoprefixer';


@Component({
  selector: 'app-farmer-editproduct',
  templateUrl: './farmer-editproduct.component.html',
  styleUrls: ['./farmer-editproduct.component.css']
})
export class FarmerEditproductComponent implements OnInit {

  constructor(private router: Router, private toastr: ToastrService,private user:SharedService,private api:ApiService) { }
  public ProductList:any[]=[];

  public CatList:any[]=[];

  
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;
  id=this.user.getadminid();
  ID = +this.id;
  public Modal_title="";
  public pro:any={};//input to model
  public del:number=0;

  ngOnInit(): void {
    this.refresh();
  }

 /* refresh(){
this.del=0;
    this.api.getCategory().subscribe(data=> {this.ProductList=data;
      console.log(this.ProductList);
  });*/


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
    this.Modal_title= "Add Product";
   
    ////////////
    this.pro={
      stokid:0,
      stock:0,
      order:0,
      category:"--select--",
      price:0.00,
      date:"",
      discription:"",
    }
    /////////////


  }



   
  delete(item:any){
    this.user.delprod(item.vegetableStocksId).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      
      this.toastr.success( 'Product is deleted!'); 
      window.location.reload();
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Deleting product failed');});
    
  


  }

  

  clickItem(dataItem:any){

    
    this.user.getcatid(dataItem.vegetablesId).subscribe(data=>{console.log(data); 
      this.CatList = data;
      this.pro={
      
        
        order:10,
        category:this.CatList[0].name,
        price:this.CatList[0].max_control_price_country,
        date:this.CatList[0].last_Updated_Time,
        vegimg:this.CatList[0].vegtable_image,
      } ;
      this.ActiveAddEditPro=true;
    this.Modal_title= "Veiw Category";
    
    })

    

/////////////////////////*
    
////////////////////////
    
/*if(this.del==1){
  this.closeClick()
}*/
    
  
  }

  closeClick(){
    this.refresh();
    this.ActiveAddEditPro=false;
    this.refresh();
    
  }
  



}
