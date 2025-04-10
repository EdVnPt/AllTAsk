import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefasPage } from './tab1.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TarefasPageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TarefasPageRoutingModule
  ],
  declarations: [TarefasPage]
})
export class TarefasPagePageModule {}
