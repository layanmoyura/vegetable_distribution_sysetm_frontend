import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit(): void {
  }

  click(){
    this.toast.success('Thank you for your Message!')
  }

}
