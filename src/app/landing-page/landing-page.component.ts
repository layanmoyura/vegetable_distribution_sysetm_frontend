import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { SharedService } from '../shared.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    ActiveAddEditPro:boolean=false;

    constructor(private api:ApiService,private router:Router,private shared:SharedService, private cartshear:CartService) { }
    
    public CategoryList:any[]=[];
    public pro:any={}
    searchKey:string="";
    ngOnInit(): void {
    
    localStorage.clear();

    this.shared.getcat().subscribe(data=> {this.CategoryList=data;
    console.log(this.CategoryList)});

    this.cartshear.searchs.subscribe((val:any)=>{
      this.searchKey=val;
     }) ;

    }

    Viewcat(item:any){

      this.shared.getcatid(item.vegetablesId).subscribe(data=>{console.log(data); 
        this.CategoryList = data;
        this.pro={
        
          
          order:10,
          category:this.CategoryList[0].name,
          price:this.CategoryList[0].max_control_price_country,
          date:this.CategoryList[0].last_Updated_Time,
          vegimg:this.CategoryList[0].vegtable_image,
        } ;
        this.ActiveAddEditPro=true;
      
      
      })
    }

    closeClick(){
      
      this.ActiveAddEditPro=false;
      location.reload();
      
      
    }


   

}
