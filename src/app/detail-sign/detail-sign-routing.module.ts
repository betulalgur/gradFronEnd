import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSignPage } from './detail-sign.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSignPageRoutingModule {}
