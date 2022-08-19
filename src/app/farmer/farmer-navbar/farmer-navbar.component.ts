import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-farmer-navbar',
  templateUrl: './farmer-navbar.component.html',
  styleUrls: ['./farmer-navbar.component.css']
})
export class FarmerNavbarComponent implements OnInit {

  image:any
  name:any
  constructor(private shared:SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();
    

  }

  loggout(){
    this.shared.logout();
  }

}
