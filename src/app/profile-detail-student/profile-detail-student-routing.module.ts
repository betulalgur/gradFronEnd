import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileDetailStudentPage } from './profile-detail-student.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileDetailStudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileDetailStudentPageRoutingModule {}
