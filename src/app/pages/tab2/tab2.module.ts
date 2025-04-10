import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CriarTarefaPage } from './tab2.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CriarTarefaPageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CriarTarefaPageRoutingModule,
  ],
    declarations: [CriarTarefaPage]
})
export class CriarTarefaPageModule {}
