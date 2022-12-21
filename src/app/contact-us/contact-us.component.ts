import { Component, OnInit, HostListener } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import Validation from '../validation';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../shared.service';
import { Observable, Subscriber } from 'rxjs';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  form2: UntypedFormGroup = new UntypedFormGroup({
    
  });

  submitted = false;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router , private toastr: ToastrService, private user:SharedService) { }

  ngOnInit(): void {
    this.form2 = this.formBuilder.group(
      {
        FullName: ['', Validators.required],

        Email: ['',[Validators.required,Validators.email]],

        Subject: ['',Validators.required],

        Message: ['', Validators.required],

  
      },
     
      
     
    );

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form2.controls;
  }


  onSubmit(){

    this.submitted = true;
    if (this.form2.invalid) {
      return;
    }
    this.user.comment(this.form2.value).subscribe(
      
      data => {console.log(data);
      console.log("sucess");
      this.toastr.success( 'Message is Sucessfully sent!');
      
      
      },
      
      error=>{console.log(error); 
      console.log("failed");
      this.toastr.error( 'Message delivering failed');});
  }

}
