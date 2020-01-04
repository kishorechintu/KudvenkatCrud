import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { NgIfDemoComponent } from './ng-if-demo/ng-if-demo.component';
import { NgforComponent } from './ngfor/ngfor.component';
//import { NgforCardComponent } from './ngfor-card/ngfor-card.component';
import { AmazonShoppingComponent } from './amazon-shopping/amazon-shopping.component';
import { NgforcardComponent } from './ngforcard/ngforcard.component';
import { IterationdemoComponent } from './iterationdemo/iterationdemo.component';
import { Iterationdemo2Component } from './iterationdemo2/iterationdemo2.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ShoppingcartNewComponent } from './shoppingcart-new/shoppingcart-new.component';


import { ParentOutComponent } from './parent-out/parent-out.component';
import { ChildOutComponent } from './child-out/child-out.component';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { ChildInputComponent } from './child-input/child-input.component';

import { ProductfilterComponent } from './productfilter/productfilter.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { ServiceLoginComponent } from './service-login/service-login.component';
import { CaptchaService } from './captcha.service';
import { ProductdataService } from './productdata.service';

import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DatabindingComponent,
    TwoWayBindingComponent,
    NgIfDemoComponent,
    NgforComponent,
    //NgforCardComponent,
    AmazonShoppingComponent,
    NgforcardComponent,
    IterationdemoComponent,
    Iterationdemo2Component,
    ConditionalComponent,
    SidemenuComponent,
    SwitchdemoComponent,
    StylebindingComponent,
    ShoppingcartNewComponent,
   
    ParentOutComponent,
    ChildOutComponent,
    ParentInputComponent,
    ChildInputComponent,
    
    ProductfilterComponent,
    
    ProductdataComponent,
    
    ServiceLoginComponent,
    
    PipeDemoComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CaptchaService,ProductdataService],
  bootstrap: [PipeDemoComponent]
})
export class AppModule { }
