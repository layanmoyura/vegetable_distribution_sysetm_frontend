import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-farmer-signup',
  templateUrl: './farmer-signup.component.html',
  styleUrls: ['./farmer-signup.component.css']
})
export class FarmerSignupComponent implements OnInit {
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
  form2: UntypedFormGroup = new UntypedFormGroup({
    
  });
 
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router , private toastr: ToastrService, private user:SharedService) {

    
   }

  ngOnInit(): void {
    
    this.form2 = this.formBuilder.group(
      {
        Name: ['', Validators.required],

        

        Living_City: ['',Validators.required],

        Email: ['', [Validators.required, Validators.email]],

        PhoneNumber: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],

        Bank: ['',Validators.required],

        NIC_no: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ]
        ],

        Profile_Photoc: [
          '',
          [
            Validators.required,
            Validators.max(1),
            Validators.maxLength(100000000)
          ]
        ],

        Profile_Photo: [
          '',
          [
            
            
          ]
        ],


        Acc_no: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(15)
          ]
        ],

        Password: [
          '',
          [
            Validators.required, 
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

        ConfirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      
       
       
        
      },
     
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
     
    );

   
  }

  
 


 
  get g(): { [key: string]: AbstractControl } {
    return this.form2.controls;
  }
  



  

  onSubmit()
  {this.submitted = true;
    if (this.form2.invalid) {
      return;
    }
    console.log(this.form2.value)
    this.user.addfar(this.form2.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/farmer_login']);
      this.toastr.success( 'Signup is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Signup failed');this.form2.reset()});
      
    
  }

  
}
