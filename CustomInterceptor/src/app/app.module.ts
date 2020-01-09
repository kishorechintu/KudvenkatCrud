// Ingeneral we will Register Interceptors by using Providers Array
// We Will use Json OBJECT {} to register Interceptors
//http Interceptors is the Predefined const,Helps to register the Interceptors

// Useclass is the Json key used to Assign the interceptro class

//multi Json key helps to Register the multiple interveptors based on boolean value

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { InterceptorComponent } from "./Components/interceptor.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FilterService } from "./auth/filter.service";
import { InterceptorService } from './Services/interceptor.service';

@NgModule({
  declarations: [AppComponent, InterceptorComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FilterService,
      multi: true
    },
    InterceptorService
  ],
  bootstrap: [InterceptorComponent]
})
export class AppModule {}
