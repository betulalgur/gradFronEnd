import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestUploadPage } from './test-upload.page';

const routes: Routes = [
  {
    path: '',
    component: TestUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestUploadPageRoutingModule {}
