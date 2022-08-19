import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {
  image:any
  name:any
  list:any
  id:any
  size: any=0
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();
    this.id= this.shared.getadminid();
    console.log(this.id)
    this.shared.getorderbycusid(this.id).subscribe(data => {this.list = data; console.log(data);this.size= this.list.length})

  }

  loggout(){
    this.shared.logout();
  }
}
