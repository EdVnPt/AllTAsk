import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { TarefasPage } from './tab1.page';

describe('TarefasPage', () => {
  let component: TarefasPage;
  let fixture: ComponentFixture<TarefasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarefasPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TarefasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
