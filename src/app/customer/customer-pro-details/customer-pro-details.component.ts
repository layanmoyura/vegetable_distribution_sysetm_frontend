import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-pro-details',
  templateUrl: './customer-pro-details.component.html',
  styleUrls: ['./customer-pro-details.component.css']
})
export class CustomerProDetailsComponent implements OnInit {

  constructor() { }
@Input() prod:any;


  ngOnInit(): void {


  }

  addcart(){
  
  }

}
