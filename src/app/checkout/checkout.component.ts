import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
@Output() public childEvent= new EventEmitter();
public Activepay:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  pay(){
    this.childEvent.emit(true);
    this.Activepay=false;
  }

}
