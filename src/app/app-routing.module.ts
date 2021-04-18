import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'visitor-log-list',
    loadChildren: () => import('./visitor-log-list/visitor-log-list.module').then( m => m.VisitorLogListPageModule)
  },
  {
    path: 'latest-news',
    loadChildren: () => import('./latest-news/latest-news.module').then( m => m.LatestNewsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
