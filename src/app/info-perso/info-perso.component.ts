import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-info-perso',
  templateUrl: './info-perso.component.html',
  styleUrls: ['./info-perso.component.scss']
})
export class InfoPersoComponent {
  constructor(private location: Location) {}

  navigateBackToMenu() {
    this.location.back();
  }
}
