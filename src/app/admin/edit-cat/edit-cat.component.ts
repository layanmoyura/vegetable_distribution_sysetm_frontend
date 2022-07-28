import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
@Component({
  selector: 'app-edit-cat',
  templateUrl: './edit-cat.component.html',
  styleUrls: ['./edit-cat.component.css']
})
export class EditCatComponent implements OnInit {

  constructor(private api:ApiService ,private router:Router) { }
  public ProductList:any[]=[];
  public pro:any={};
  pro_null:boolean=false;
  ActiveAddEditPro:boolean=false;

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.api.getCategory().subscribe(data=> {this.ProductList=data;
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
