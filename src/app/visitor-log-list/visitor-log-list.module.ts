import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitorLogListPageRoutingModule } from './visitor-log-list-routing.module';

import { VisitorLogListPage } from './visitor-log-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitorLogListPageRoutingModule
  ],
  declarations: [VisitorLogListPage]
})
export class VisitorLogListPageModule {}
