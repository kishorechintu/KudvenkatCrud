import { Component, OnInit } from '@angular/core';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-service-login',
  templateUrl: './service-login.component.html',
  styleUrls: ['./service-login.component.css']
})
export class ServiceLoginComponent implements OnInit {

  public code;
  constructor(private captcha : CaptchaService) { }

  ngOnInit() {
    this.code = this.captcha.GenerateCode();
  }

}
