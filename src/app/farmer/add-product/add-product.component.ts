import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  CategoryList:any=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCategory().subscribe(data=> this.CategoryList=data, );
   

  }

}
