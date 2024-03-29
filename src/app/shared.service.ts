import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIurl = "https://onlineplatformforvegetables20221222095524.azurewebsites.net/api";
  

  decoded:any

  constructor(private http:HttpClient,private router:Router, private jwtHelper:JwtHelperService, private toastr:ToastrService) { }

  addrol(val:any){
    return this.http.post(this.APIurl+"/role/register",val)
  }

  logrol(val:any){
    return this.http.post(this.APIurl+"/role/login",val)
  }

  logcus(val:any){
    return this.http.post(this.APIurl+"/customer/login",val)
  }

  logfar(val:any){
    return this.http.post(this.APIurl+"/farmer/login",val)
  }

  logadm(val:any){
    return this.http.post(this.APIurl+"/admin/login",val)
  }

  logcou(val:any){
    return this.http.post(this.APIurl+"/courier/login",val)
  }

  addcus(val:any){
    return this.http.post(this.APIurl+"/customer/register",val)
  }

  addfar(val:any){
    return this.http.post(this.APIurl+"/farmer/register",val)
  }

  addcou(val:any){
    return this.http.post(this.APIurl+"/courier/register",val)
  }

  addcat(val:any){
    return this.http.post(this.APIurl+"/adminfunc/addcat",val)
  }

  getcat():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/adminfunc/getcat")
  }
  getpro():Observable<any[]>{
    return this.http.get<any>(this.APIurl+"/CustomerFunc/customervegetablestockall")
  }

  delcat(id:any){
    return this.http.delete(this.APIurl+"/adminfunc/delcat/"+id)
  }

  getadmin(id:any):Observable<any>{
    return this.http.get<any>(this.APIurl+"/adminfunc/getadmin/"+id)
  }

  updatecat(id:any,val:any){
    return this.http.put(this.APIurl+"/adminfunc/updatecat/"+id,val);
  }

  addprod(val:any){
    return this.http.post(this.APIurl+"/farmerfunc/addstock",val)
  }

  comment(val:any){
    return this.http.post(this.APIurl+"/customerfunc/customercomment",val)
  }

  getprodfar(id:any):Observable<any>{
    return this.http.get<any>(this.APIurl+"/farmerfunc/getfarmerprod/"+id)
  }

  delprod(id:any){
    return this.http.delete(this.APIurl+"/farmerfunc/delprod/"+id)
  }

  getcatid(id:any):Observable<any>{
    return this.http.get<any>(this.APIurl+"/farmerfunc/getcat/"+id)
  }

  getfarm(id:any):Observable<any>{
    return this.http.get<any>(this.APIurl+"/customerfunc/farmer/"+id)
  }


  addorder(val:any){
    return this.http.post(this.APIurl+"/customerfunc/customerorder",val)
  }

  getorder(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/farmerfunc/getfarmerorder/"+id)
  }

  getorder2(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/farmerfunc/getfarmerorder2/"+id)
  }

  updorder(id:any,val:any){
    return this.http.put(this.APIurl+"/farmerfunc/putorder/"+id,val)
  }

  getstock(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/farmerfunc/getstock/"+id)
  }

  getstockimg(id:any){
    return this.http.get(this.APIurl+"/farmerfunc/getstockimg/"+id)
  }

  getorderadmin():Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getorder/")
  }

  getcus(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getcus/"+id)
  }

  getcou():Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getcou")
  }

  getorderbyid(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getorder/"+id)
  }



  getorderbycusid(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getorderbycus/"+id)
  }

  getorderbycusid1(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getorderbycus1/"+id)
  }

  getorderbycusid2(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getorderbycus2/"+id)
  }

  updateordadmin(id:any,val:number){
    return this.http.put(this.APIurl+"/adminfunc/updateord/"+id,val);
  }

  adddel(val:any){
    return this.http.post(this.APIurl+"/adminfunc/adddel",val)
  }

  getcusbyid(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/customerfunc/getcustomeredit/"+id)
  }

   getcoubyid(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getdelbycou/"+id);
  }

  getcoubyid1(id:any):Observable<any>{
    return this.http.get(this.APIurl+"/adminfunc/getdelbycou1/"+id);
  }

  updatedel0(id:any,val:number){
    return this.http.put(this.APIurl+"/adminfunc/updatedel0/"+id,val);
  }

  updatedel(id:any,val:number){
    return this.http.put(this.APIurl+"/adminfunc/updatedel/"+id,val);
  }

  confirmdel(id:any,val:number){
    return this.http.put(this.APIurl+"/adminfunc/confirmdel/"+id,val);
  }


  logout(){
  
    localStorage.removeItem('token')
    this.router.navigate(['/home'])
    this.toastr.error('You are logged out')
  
  }
  
 

  



  
  gettoken(){
   
    return localStorage.getItem('token') 
  }
  
  getname(){
  this.decoded = localStorage.getItem('token')
  const decodedaf = this.jwtHelper.decodeToken(this.decoded)
  
  if(decodedaf!=null){
    const name= decodedaf.name;
    return name;
  }
  }

  getpic(){
    this.decoded = localStorage.getItem('token')
    const decodedaf = this.jwtHelper.decodeToken(this.decoded)
    
    if(decodedaf!=null){
      const photo= decodedaf.photo;
      return photo;
    }
    }


    getadminid(){
      this.decoded = localStorage.getItem('token')
      const decodedaf = this.jwtHelper.decodeToken(this.decoded)
      
      if(decodedaf!=null){
        const id= decodedaf.id;
        return id;
      }
      }

      getrol(){
        this.decoded = localStorage.getItem('token')
        const decodedaf = this.jwtHelper.decodeToken(this.decoded)
        
        if(decodedaf!=null){
          const rol= decodedaf.role;
          return rol;
        }
        }

        loggedinuser(){
          this.decoded = localStorage.getItem('token')
          const decodedaf = this.jwtHelper.decodeToken(this.decoded)
          
          if(decodedaf!=null && decodedaf.role =="customer"){
            return true;
          }
          else{
            return false;
          }
        }

        loggedinadmin(){
          this.decoded = localStorage.getItem('token')
          const decodedaf = this.jwtHelper.decodeToken(this.decoded)
          
          if(decodedaf!=null && decodedaf.role =="admin"){
            return true;
          }
          else{
            return false;
          }
        }

        loggedinfarmer(){
          this.decoded = localStorage.getItem('token')
          const decodedaf = this.jwtHelper.decodeToken(this.decoded)
          
          if(decodedaf!=null && decodedaf.role =="farmer"){
            return true;
          }
          else{
            return false;
          }
        }

        loggedincourier(){
          this.decoded = localStorage.getItem('token')
          const decodedaf = this.jwtHelper.decodeToken(this.decoded)
          
          if(decodedaf!=null && decodedaf.role =="courier"){
            return true;
          }
          else{
            return false;
          }
        }

    
}


