import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeliveyComponent } from './delivey/delivey.component';
import { FarmerViewComponent } from './farmer-view/farmer-view.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'dashboard' , component:DashboardComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'admin_pannel' , component:AdminPannelComponent},
  {path: 'order' , component:OrderComponent},
  {path: 'farmer_view' , component:FarmerViewComponent},
  {path: 'delivery' , component:DeliveyComponent}
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
