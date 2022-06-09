import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { LoginContinuePageRoutingModule } from './login-continue-routing.module';

import { LoginContinuePage } from './login-continue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginContinuePageRoutingModule
  ],
  declarations: [LoginContinuePage]
})
export class LoginContinuePageModule {}
