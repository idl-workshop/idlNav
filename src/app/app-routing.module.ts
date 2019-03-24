import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
//  { path: '', loadChildren: './subtabs/subtabs.module#SubtabsPageModule' },
  // { path: 'subtabs', loadChildren: './subtabs/subtabs.module#SubtabsPageModule' },
  // { path: 'subtab1', loadChildren: './subtab1/subtab1.module#Subtab1PageModule' },
  // { path: 'subtab2', loadChildren: './subtab2/subtab2.module#Subtab2PageModule' },
  // { path: 'subtab3', loadChildren: './subtab3/subtab3.module#Subtab3PageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
