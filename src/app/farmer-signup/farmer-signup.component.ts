import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-farmer-signup',
  templateUrl: './farmer-signup.component.html',
  styleUrls: ['./farmer-signup.component.css']
})
export class FarmerSignupComponent implements OnInit {

  
  
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
      this.router.navigate(['/login']);
      this.toastr.success( 'Signup is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Signup failed');this.form2.reset()});
      
    
  }

  
}
