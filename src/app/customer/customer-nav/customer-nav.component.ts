import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent implements OnInit {
  image:any
  name:any
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();

  }

}
