import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-acc',
  templateUrl: './customer-acc.component.html',
  styleUrls: ['./customer-acc.component.css']
})
export class CustomerAccComponent implements OnInit {

  image:any
  name:any
  id:any
  ID:any
  list:any
  size:any
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

  
    this.image = this.shared.getpic();
    this.name = this.shared.getname();
    this.id=this.shared.getadminid();
    this.ID=+this.id
    
    this.shared.getcusbyid(this.ID).subscribe(data=>{this.list=data; console.log(this.list)})
    
    this.shared.getorderbycusid(this.id).subscribe(data => {this.list = data; console.log(data);this.size=this.list.length })


    

  }

}
