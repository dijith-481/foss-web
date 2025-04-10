import { Component } from '@angular/core';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  imports: [SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
