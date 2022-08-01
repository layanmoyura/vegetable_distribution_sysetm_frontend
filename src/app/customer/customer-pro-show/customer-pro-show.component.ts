import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-pro-show',
  templateUrl: './customer-pro-show.component.html',
  styleUrls: ['./customer-pro-show.component.css']
})
export class CustomerProShowComponent implements OnInit {

  constructor(private service:SharedService,private arouter:ActivatedRoute,private router:Router) { }
  productList:any[]=[];
  cat_id:number=0;
  prdlist:any[]=[];
  y:number=0;
  searchKey:any="";
  Activtall:boolean=false;
  Activepart:boolean=true;
  resultItem:boolean=false;
 public Activedetail:boolean=false;
  Modal_title:string="";
  public prod:any={};
  public cat:any={};

  ngOnInit(): void {


    var id:any= this.arouter.snapshot.paramMap.get('id');
    this.cat_id=parseInt(id);
     if(this.cat_id==0){
       this.Activtall=true;
       this.Activepart=false;
     }
    
    
    this.service.getpro().subscribe(data=> {
      this.productList=data,

      

      this.productList.forEach((item:any)=>{
        console.log(this.y);
        if(item.vegetablesId==this.cat_id){
           this.prdlist[this.y]=item;
           this.y++;
        }

        if(this.cat_id==0){
          this.prdlist[this.y]=item;
           this.y++; 
        }

     });

    
     if(this.prdlist.length==0){
      this.resultItem=true;
     }
    
    
      console.log(this.productList.length);
   
  });


  

  }


  onproduct(item:any){
       
    this.Activedetail=true;
    this.Modal_title= "Product details";
   
    ////////////
    this.prod={
      amount:item.amount,
      farmers_price_per_kg:item.farmers_price_per_kg,
      discription:item.discription,
      manu_date:item.manu_date,
      
  
    }
    /////////////


  }

  closeClick(){
    
    this.Activedetail=false;
  
    
  }



}
