import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  //declared for the error in app.commponent.ts
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
