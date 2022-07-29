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


  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });
  submitted = false;


  constructor( private formBuilder: UntypedFormBuilder, private router: Router, private toastr: ToastrService,private user:SharedService) { }

  ngOnInit(): void {
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
        
        data => {console.log(data);
        console.log("sucess");
        this.form.reset()
        this.submitted = false;
        
        
        this.toastr.success( 'Prodcut is added!'); 
        },
        
        error=>{console.log(error); 
        console.log("failed");
        this.toastr.error( 'Adding Product failed');});

    }

    
      
  
    
      
      
    
    
  }


