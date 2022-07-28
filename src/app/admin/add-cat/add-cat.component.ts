import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/shared.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.css']
})
export class AddCatComponent implements OnInit {
  
  id=this.user.getadminid();
  ID = +this.id;
  image:any;
  pageYoffset:any;
 

  @HostListener('window:scroll', ['$event']) onScroll(){
    this.pageYoffset = window.pageYOffset;
  }
  
  
    onChange($event:Event){
      const target = $event.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      console.log(file);
      this.convertToBase64(file);
  
    }
  
  
    convertToBase64(file:File){
      const observable = new Observable((subscriber:Subscriber<any>) => {
        this.readFile(file, subscriber);
      });
  
      observable.subscribe((data =>{
        console.log(data);
        this.image = data;
        
      }))
    }

    readFile(file:File, subscriber:Subscriber<any>){
      const filereader = new FileReader();
      filereader.readAsDataURL(file);
  
      filereader.onload = () => {
        subscriber.next(filereader.result);
        subscriber.complete();
      };
  
      filereader.onerror = (error) => {
        subscriber.error(error);
        subscriber.complete();
      }
    }
  

  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router, private toastr: ToastrService,private user:SharedService) { }

  ngOnInit(): void {
   
    this.form = this.formBuilder.group(
      {

       
        Name: [
          '',
          [
            Validators.required
            
          ]
        ],

        Max_control_price_country: [
          '',
          [
            Validators.required
            
          ]
        ],

        Profile_Photoc: [
          '',
          [
            Validators.required
            
          ]
        ],

        Vegtable_image: [
          
        ],

        AdminId: [
         
        ],
        
        Last_Updated_Time:[]
       

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
    

    this.form.patchValue({
      Vegtable_image:this.image,
      AdminId:this.ID,
      Last_Updated_Time:new Date().toLocaleString()
    })
      console.log(this.form.value)

    
    this.user.addcat(this.form.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.form.reset()
      
      this.toastr.success( 'Category is added!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Adding Category failed');});
      
  
    
      
      
    
    
  }

}


