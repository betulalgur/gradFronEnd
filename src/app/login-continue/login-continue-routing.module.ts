import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginContinuePage } from './login-continue.page';

const routes: Routes = [
  {
    path: '',
    component: LoginContinuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginContinuePageRoutingModule {}
