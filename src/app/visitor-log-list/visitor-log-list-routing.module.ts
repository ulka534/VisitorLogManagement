import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitorLogListPage } from './visitor-log-list.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorLogListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitorLogListPageRoutingModule {}
