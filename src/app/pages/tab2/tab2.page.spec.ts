import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { CriarTarefaPage } from './tab2.page';

describe('CriarTarefaPage', () => {
  let component: CriarTarefaPage;
  let fixture: ComponentFixture<CriarTarefaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CriarTarefaPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
