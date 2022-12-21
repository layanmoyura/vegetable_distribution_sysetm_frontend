import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-courier-acc',
  templateUrl: './courier-acc.component.html',
  styleUrls: ['./courier-acc.component.css']
})
export class CourierAccComponent implements OnInit {

  image:any
  name:any
  id:any
  ID:any
  list:any
  list2:any
  size:any
  size2:any
  firstname:any 
  Lastname:any
  Email:any
  NIC:any
  Livingcity:any
  
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

  
    this.image = this.shared.getpic();
    this.name = this.shared.getname();
    this.id=this.shared.getadminid();
    this.ID=+this.id
    
    this.shared.getcusbyid(this.ID).subscribe(data=>{this.list=data; console.log(this.list);
    this.firstname = this.list[0].firstName;
    this.Lastname = this.list[0].lastName;
    this.Email = this.list[0].email;
    this.NIC = this.list[0].niC_No;
    this.Livingcity = this.list[0].living_City;
    
    })

    
    
    
    this.shared.getorder(this.id).subscribe(data => {this.list = data; console.log(data);this.size=this.list.length })

    this.shared.getorder2(this.id).subscribe(data => {this.list2 = data; console.log(data);this.size2=this.list2.length })


    

  }

  loggout(){
    this.shared.logout();
  }
}
