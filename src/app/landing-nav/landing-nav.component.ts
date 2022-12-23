import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-landing-nav',
  templateUrl: './landing-nav.component.html',
  styleUrls: ['./landing-nav.component.css']
})
export class LandingNavComponent implements OnInit {

  constructor(private shared: SharedService ,private cartshear:CartService,private router:Router) { }
  public searchTerm:string=" ";
  ngOnInit(): void {
  }

  onsearch(){
    this.cartshear.searchs.next(this.searchTerm);
    this.router.navigate(["/home"]);
    console.log(this.searchTerm);
    this.searchTerm="";

  }
}
