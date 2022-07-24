import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {



    constructor(private api:ApiService,private router:Router) { }
    public CategoryList:any[]=[];
  
    ngOnInit(): void {
      this.api.getCategory().subscribe(data=> this.CategoryList=data);
    console.log(this.CategoryList);
    }

}
