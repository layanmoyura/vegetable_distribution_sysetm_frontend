import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'dashboard' , component:DashboardComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'signup' , component:SignupComponent},
  {path: 'admin_pannel' , component:AdminPannelComponent},
  {path: 'order' , component:OrderComponent}
 

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
