import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import Validation from '../validation';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
        role: ['',[Validators.required]],
       

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
    if(this.form.value.role == 'customer' ){
      console.log(this.form.value)

    
    this.user.logcus(this.form.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/delivery']);
      this.toastr.success( 'Login is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Login failed');});
      
    }

    if(this.form.value.role == 'admin' ){
      console.log(this.form.value)

    
    this.user.logadm(this.form.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/admin_pannel']);
      this.toastr.success( 'Login is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Login failed');});
      
    }

    if(this.form.value.role == 'farmer' ){
      console.log(this.form.value)

    
    this.user.logfar(this.form.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/farmer_view']);
      this.toastr.success( 'Login is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Login failed');});
      
    }

    if(this.form.value.role == 'courier' ){
      console.log(this.form.value)

    
    this.user.logcou(this.form.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.router.navigate(['/order']);
      this.toastr.success( 'Login is Sucessfull!'); 
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Login failed');});
      
    }
    
      
      
    
    
  }
}


