import { Component } from '@angular/core';
import {
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { book, person, add } from 'ionicons/icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs]
})
export class TabsPage {
  constructor(private router: Router) {
    addIcons({ book, add, person });
  }

}
