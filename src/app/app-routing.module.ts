import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { CartComponent } from './cart/cart.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveyComponent } from './delivey/delivey.component';
import { FarmerViewComponent } from './farmer-view/farmer-view.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:LandingPageComponent},
  {path: 'dashboard' , component:DashboardComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'admin_pannel' , component:AdminPannelComponent},
  {path: 'order' , component:OrderComponent},
  {path: 'farmer_view' , component:FarmerViewComponent},
  {path: 'delivery' , component:DeliveyComponent},
  {path: 'cart' , component:CartComponent},
  {path: 'help' , component:HelpComponent},
  {path: 'contact_us' , component:ContactUsComponent},
  {path: 'about_us' , component:AboutUsComponent},
  {path: 'manage_profile' , component:ManageProfileComponent},
  {path: 'customer_login' , component:CustomerLoginComponent},
  {path: 'customer_signup' , component:CustomerSignupComponent},

 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
