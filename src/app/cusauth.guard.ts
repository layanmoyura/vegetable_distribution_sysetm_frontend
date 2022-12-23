import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedService } from './shared.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CusAuthGuard implements CanActivate {
  
  constructor(private _shared:SharedService,private _router:Router,private toastr:ToastrService){}
 
  canActivate():boolean
  {
    if(this._shared.loggedinuser()){
      return true;
    }
    else{
      this._router.navigate([''])
      this.toastr.error( 'Log in to the system');
      return false;
    }
  }
}