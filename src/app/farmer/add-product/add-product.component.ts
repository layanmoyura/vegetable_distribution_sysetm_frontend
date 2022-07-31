import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  CategoryList:any=[];
  id=this.user.getadminid();
  ID = +this.id;
public activeVeiw=true;
public activeAdd=false;


      order:number=0;
      category:string="--select--";
      price:number=0.00;
      date:string="";
      vegimg:string="";



  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });
  submitted = false;


  constructor( private formBuilder: UntypedFormBuilder, private router: Router, private toastr: ToastrService,private user:SharedService) { }
  @Input() pro:any;

  ngOnInit(): void {
               
               this.order=this.pro.order;
                this.category=this.pro.category;
                this.price=this.pro.price;
                this.date=this.pro.date;
                this.vegimg=this.pro.vegimg;


         
                if(this.pro.stokid==0){
                  this.activeAdd=true;
                  this.activeVeiw=false;
                }




    this.user.getcat().subscribe(data=> this.CategoryList=data);

    this.form = this.formBuilder.group(
      {

       
        Amount: [
          '',
          [
            Validators.required
            
          ]
        ],

        Farmers_price_per_kg: [
          '',
          [
            Validators.required
            
          ]
        ],

        Discription: [
          '',
          [
            Validators.required
            
          ]
        ],

        Manu_date: [
          '',
          [
            Validators.required
            
          ]
        ],

        

        VegetablesId: [
          '',
          [
            Validators.required
            
          ]
        ],
        
        Updated_Time:[

        ],

        FarmerId:[
          
        ]
       

      },

    );
    
   

  }

  
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  onSubmit(): void {
    
    
      this.submitted = true;
    if (this.form.invalid) {
      return;
    }
      
        var x = this.form.value.VegetablesId
        var y:number = +x

        this.form.patchValue({
          VegetablesId:y,
          FarmerId:this.ID,
          Updated_Time:new Date().toLocaleString()
        })
  
      
      this.user.addprod(this.form.value).subscribe(
        
        response => {console.log(response);

        console.log("sucess");
        this.form.reset()
        this.submitted = false;
        
        
        this.toastr.success( 'Prodcut is added!'); 
        },
        
        error=>{console.log(error.status); 
        if(error.status == 411){
          console.log("failed");
          this.toastr.error( 'Please provide less price per kg than MRP of category');
        }  
        else{
        console.log("failed");
        this.toastr.error( 'Adding Product failed');}});

    }

    
      
  
    
      
      
    
    
  }


