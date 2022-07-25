import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-customer-signup',
  templateUrl: './customer-signup.component.html',
  styleUrls: ['./customer-signup.component.css']
})
export class CustomerSignupComponent implements OnInit {
  form1: UntypedFormGroup = new UntypedFormGroup({
   
  });
  
  form2: UntypedFormGroup = new UntypedFormGroup({
    
  });
  form3: UntypedFormGroup = new UntypedFormGroup({
    
  });
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router , private toastr: ToastrService, private user:SharedService) {

    
   }

  ngOnInit(): void {
    this.form1 = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],

        LastName: ['',Validators.required],

        Living_City: ['',Validators.required],

        Email: ['', [Validators.required, Validators.email]],

       

        NIC_no: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
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

  
 


  get f(): { [key: string]: AbstractControl } {
    return this.form1.controls;
  }

  



  onSubmit()
  {this.submitted = true;
    if (this.form1.invalid) {
      return;
    }
    console.log(this.form1.value)
    this.user.addcus(this.form1.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/login']);
      this.toastr.success( 'Signup is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Signup failed');this.form1.reset()});
      
    
    
    
  }

  onSubmitFarmer()
  {this.submitted = true;
    if (this.form2.invalid) {
      return;
    }
    console.log(this.form2.value)
    this.user.addfar(this.form2.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/login']);
      this.toastr.success( 'Signup is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Signup failed');this.form2.reset()});
      
    
  }

  onSubmitCourier()
  {this.submitted = true;
    if (this.form3.invalid) {
      return;
    }
    console.log(this.form3.value)
    this.user.addcou(this.form3.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/login']);
      this.toastr.success( 'Signup is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Signup failed'); this.form3.reset()});
      
    
  }



}
