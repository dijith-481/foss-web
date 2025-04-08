import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonComponent } from '../ui/back-button/back-button.component';

@Component({
  selector: 'app-about',
  imports: [BackButtonComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private location: Location) {}
  goBack(): void {
    this.location.back();
  }
}
