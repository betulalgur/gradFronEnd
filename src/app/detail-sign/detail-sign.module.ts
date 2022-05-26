import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSignPageRoutingModule } from './detail-sign-routing.module';

import { DetailSignPage } from './detail-sign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSignPageRoutingModule
  ],
  declarations: [DetailSignPage]
})
export class DetailSignPageModule {}
