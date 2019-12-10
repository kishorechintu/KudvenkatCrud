import {Component} from '@angular/core';
@Component({
    selector : 'app-home',
    template :`
    <h2>{{msg}}</h2>
    <p>This is our Home Component</p>`,
    styles:['h2{background-color:red; color:white}']
})

export class HomeComponent{
    public msg = "Welcome to Angular 8"
}
