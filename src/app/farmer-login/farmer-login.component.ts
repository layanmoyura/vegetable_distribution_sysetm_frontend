import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import Validation from '../validation';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({
    Email_or_phonenumber: new UntypedFormControl(''),
    Password: new UntypedFormControl(''),
    role: new UntypedFormControl(''),
    
  });
  submitted = false;
  

  constructor(private formBuilder: UntypedFormBuilder, private router: Router, private toastr: ToastrService,private user:SharedService) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {

        Email_or_phonenumber: ['', [Validators.required, Validators.email]],
        Password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        
       

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
    
      console.log(this.form.value)

    
    this.user.logfar(this.form.value).subscribe(
      
      result => {console.log(result);
      
      localStorage.setItem('token',JSON.stringify(result));
      this.router.navigate(['/farmer/farmer_acc']);
      this.toastr.success( 'Login is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Login failed');});
      
  
    
      
      
    
    
  }
}


