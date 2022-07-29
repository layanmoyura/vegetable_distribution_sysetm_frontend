import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
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
  tname:any;
  tprice:any;
  @Input() pro:any
 

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

    console.log(this.pro.Name)

    if(this.pro.VegetablesId!=0){
      this.image=this.pro.Vegtable_image;
      this.tname=this.pro.Name;
      this.tprice=this.pro.Max_control_price_country;
    }
   
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
    
    
    if(this.pro.VegetablesId==0){

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

    else{

      this.form.patchValue({
        Vegtable_image:this.image,
        AdminId:this.ID,
        Last_Updated_Time:new Date().toLocaleString()
      })
        console.log(this.form.value)
        console.log(this.pro)

        if(this.form.value.Name== this.tname && 
          this.form.value.Vegtable_image== this.pro.Vegtable_image &&
           this.form.value.Max_control_price_country== this.tprice){
            this.toastr.warning('Already upto date')
           }

        else{
          this.user.updatecat(this.pro.VegetablesId,this.form.value).subscribe(
        
            data => {console.log(data);
            console.log("sucess");
            
            
            this.toastr.success( 'Category is updated!'); 
            },
            
            error=>{console.log(error); 
            console.log("failed");
            this.toastr.error( 'Updating Category failed');});

        }   
  
      
      

    }

    
      
  
    
      
      
    
    
  }

}


