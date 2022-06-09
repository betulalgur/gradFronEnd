import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-continue',
  templateUrl: './login-continue.page.html',
  styleUrls: ['./login-continue.page.scss'],
})
export class LoginContinuePage implements OnInit {

  public datas:any;
  
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  success(){
    
  }

}

export class ToastExample {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
