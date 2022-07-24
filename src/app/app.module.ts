import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavibarComponent } from './navibar/navibar.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { BackgroundComponent } from './background/background.component';
import { AdminPannelComponent } from './admin-pannel/admin-pannel.component';
import { OrderComponent } from './order/order.component';

import { DeliveyComponent } from './delivey/delivey.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CartComponent } from './cart/cart.component';
import { HelpComponent } from './help/help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { HttpClientModule } from '@angular/common/http';
//for validations
import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

//for toast
import { ToastrModule } from 'ngx-toastr';
import { LandingNavComponent } from './landing-nav/landing-nav.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerSignupComponent } from './customer-signup/customer-signup.component';
import { FarmerNavbarComponent } from './farmer/farmer-navbar/farmer-navbar.component';
import { FarmerEditproductComponent } from './farmer/farmer-editproduct/farmer-editproduct.component';
import { FarmerVeiwComponent } from './farmer/farmer-veiw/farmer-veiw.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent, 
    LoginComponent,
    NavibarComponent,
    SignupComponent,
    BackgroundComponent,
    AdminPannelComponent,
    OrderComponent,
    DeliveyComponent,
    CartComponent,
    HelpComponent,
    ContactUsComponent,
    AboutUsComponent,
    ManageProfileComponent,
    LandingNavComponent,
    LandingPageComponent,
    CustomerLoginComponent,
    CustomerSignupComponent,
    FarmerNavbarComponent,
    FarmerEditproductComponent,
    FarmerVeiwComponent,


    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatIconModule,
    HttpClientModule, // for request handling
    //for validation
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
    HttpClientModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
