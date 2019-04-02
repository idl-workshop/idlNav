import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubtabsPage } from './subtabs.page';

const routes: Routes = [
  {
    path: 'subtabs',
    component: SubtabsPage,
    children: [
      {
        path: 'subtab1',
        children: [
          {
            path: '',
            loadChildren: '../subtab1/subtab1.module#Subtab1PageModule'
          }
        ]
      },
      {
        path: 'subtab2',
        children: [
          {
            path: '',
            loadChildren: '../subtab2/subtab2.module#Subtab2PageModule'
          }
        ]
      },
      {
        path: 'subtab3',
        children: [
          {
            path: '',
            loadChildren: '../subtab3/subtab3.module#Subtab3PageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'subtabs/subtab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'subtabs/subtab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SubtabsPageRoutingModule {}
