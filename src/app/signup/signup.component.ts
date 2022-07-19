import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    firstname: new UntypedFormControl(''),
   
  });
  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router , private toastr: ToastrService) {

    
   }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        FirstName: ['', Validators.required],

        LastName: ['',Validators.required],

        livingcity: ['',Validators.required],

        Email: ['', [Validators.required, Validators.email]],

        phone_number: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ]
        ],

        nic_number: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(12)
          ]
        ],

        password: [
          '',
          [
            Validators.required, 
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],

        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      
       
       
        
      },
     
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
     
    );
  }

  
 


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit()
  {this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.toastr.success( 'Signup is Sucessfull!');
    this.router.navigate(['/order']); 
    
  }

  onSubmitFarmer()
  {this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.toastr.success( 'Signup is Sucessfull!');
    this.router.navigate(['/order']); 
    
  }

  onSubmitCourier()
  {this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
    this.toastr.success( 'Signup is Sucessfull!');
    this.router.navigate(['/order']); 
    
  }


  


  
  }

  // custom validator to check that two fields match


