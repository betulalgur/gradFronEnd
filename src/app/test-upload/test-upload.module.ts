import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestUploadPageRoutingModule } from './test-upload-routing.module';

import { TestUploadPage } from './test-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestUploadPageRoutingModule
  ],
  declarations: [TestUploadPage]
})
export class TestUploadPageModule {}
