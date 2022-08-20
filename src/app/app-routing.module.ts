import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveyComponent } from './delivey/delivey.component';
import { FarmerVeiwComponent } from './farmer/farmer-veiw/farmer-veiw.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { FarmerEditproductComponent } from './farmer/farmer-editproduct/farmer-editproduct.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { CourierLoginComponent } from './courier-login/courier-login.component';
import { FarmerSignupComponent } from './farmer-signup/farmer-signup.component';
import { CourierSignupComponent } from './courier-signup/courier-signup.component';
import { EditCatComponent } from './admin/edit-cat/edit-cat.component';
import { EditProfComponent } from './admin/edit-prof/edit-prof.component';
import { EditOrderComponent } from './admin/edit-order/edit-order.component';
import { ViewComponent } from './admin/view/view.component';
import { CustomerVeiwComponent } from './customer/customer-veiw/customer-veiw.component';
import { CustomerCatShowComponent } from './customer/customer-cat-show/customer-cat-show.component';
import { CustomerProShowComponent } from './customer/customer-pro-show/customer-pro-show.component';
import { CartComponent } from './cart/cart.component';
import { CustomerCartComponent } from './customer/customer-cart/customer-cart.component';
import { EditorderComponent } from './farmer/editorder/editorder.component';
import { CustomerAccComponent } from './customer/customer-acc/customer-acc.component';
import { OrderdetComponent } from './admin/orderdet/orderdet.component';
import { OrdershowComponent } from './customer/ordershow/ordershow.component';
import { AdminAccComponent } from './admin/admin-acc/admin-acc.component';
import { FarmerAccComponent } from './farmer/farmer-acc/farmer-acc.component';
import { CourierVeiwComponent } from './courier/courier-veiw/courier-veiw.component';
import { CourierAccComponent } from './courier/courier-acc/courier-acc.component';
import { CourierEditComponent } from './courier/courier-edit/courier-edit.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:LandingPageComponent},
  {path: 'dashboard' , component:DashboardComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'admin_pannel' , component:AdminPannelComponent},
  {path: 'order' , component:OrderComponent},
  {path: 'delivery' , component:DeliveyComponent},

  {path: 'help' , component:HelpComponent},
  {path: 'contact_us' , component:ContactUsComponent},
  {path: 'about_us' , component:AboutUsComponent},
  {path: 'manage_profile' , component:ManageProfileComponent},
  {path: 'customer_login' , component:CustomerLoginComponent},
  {path: 'customer_signup' , component:CustomerSignupComponent},
  {path:'farmer',component:FarmerVeiwComponent,
children:[
 { path:'editproduct',component:FarmerEditproductComponent},
 { path:'editorder',component:EditorderComponent},
 {path:'farmer_acc',component:FarmerAccComponent},

]
},
{path: 'farmer_login' , component:FarmerLoginComponent},
{path: 'courier_login' , component:CourierLoginComponent},
{path: 'farmer_signup' , component:FarmerSignupComponent},
{path: 'courier_signup' , component:CourierSignupComponent},
{path:'admin',component:ViewComponent,
children:[
 { path:'editcat',component:EditCatComponent},
 { path:'editprof',component:EditProfComponent},
 { path:'editorders',component:EditOrderComponent},
 {path:'admin_acc',component:AdminAccComponent}

]
},
{path:'customer',component:CustomerVeiwComponent,
children:[
  {path:'category-show',component:CustomerCatShowComponent},
  {path:'products-show/:id',component:CustomerProShowComponent},
  {path: 'cart' ,component:CustomerCartComponent },
  {path:'customer_account',component:CustomerAccComponent},
  {path:'customer_order',component:OrdershowComponent},
  
]
},
{path:'courior',component:CourierVeiwComponent,
children:[
  {path:'courior-acc',component:CourierAccComponent},
  {path:'courior-edit',component:CourierEditComponent},
]
},




]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
