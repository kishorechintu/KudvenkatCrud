import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { DataComponent } from './data/data.component';
import { FilterComponent } from './filter/filter.component';

import { TemplateformComponent } from './templateform/templateform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    DataComponent,
    FilterComponent,
    routingComponents,
    
    TemplateformComponent,
    
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
