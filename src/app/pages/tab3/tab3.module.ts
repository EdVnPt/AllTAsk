import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './tab3.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PerfilPageRoutingModule } from './tab3-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PerfilPageRoutingModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
