import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-farmer-acc',
  templateUrl: './farmer-acc.component.html',
  styleUrls: ['./farmer-acc.component.css']
})
export class FarmerAccComponent implements OnInit {

  image:any
  name:any
  constructor(private shared: SharedService) { }

  ngOnInit(): void {

    this.image = this.shared.getpic();
    this.name = this.shared.getname();

  }

}
