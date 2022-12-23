import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
@Output() public childEvent= new EventEmitter();
public Activepay:boolean=true;
  constructor(private formBuilder:UntypedFormBuilder,private toastr:ToastrService) { }
  form: UntypedFormGroup = new UntypedFormGroup({
    
    
  });

  submitted=false;

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {

       
        No: [
          '',
          [
            Validators.required
            
          ]
        ],

        Name: [
          '',
          [
            Validators.required
            
          ]
        ],

        PIN: [
          '',
          [
            Validators.required
            
          ]
        ],


        

        

      },

    );


  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  

  pay(){
    this.submitted = true;
  if (this.form.invalid) {
    return;
  }
    this.childEvent.emit(true);
    this.Activepay=false;
  }

}
