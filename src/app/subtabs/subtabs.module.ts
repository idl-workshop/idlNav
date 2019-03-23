import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SubtabsPageRoutingModule } from './subtabs.router.module';

import { SubtabsPage } from './subtabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SubtabsPageRoutingModule
  ],
  declarations: [SubtabsPage]
})
export class SubtabsPageModule {}
