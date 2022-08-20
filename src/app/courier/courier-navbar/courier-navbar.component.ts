import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-courier-navbar',
  templateUrl: './courier-navbar.component.html',
  styleUrls: ['./courier-navbar.component.css']
})
export class CourierNavbarComponent implements OnInit {

  image:any
  name:any
  list:any
  id:any
  size: any=0
 
  constructor(private shared:SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();
    this.id= this.shared.getadminid();
    console.log(this.id)
   
    
  }

  loggout(){
    this.shared.logout();
  }

}
