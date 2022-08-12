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
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();

  }

}
