import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileDetailStudentPageRoutingModule } from './profile-detail-student-routing.module';

import { ProfileDetailStudentPage } from './profile-detail-student.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileDetailStudentPageRoutingModule
  ],
  declarations: [ProfileDetailStudentPage]
})
export class ProfileDetailStudentPageModule {}
