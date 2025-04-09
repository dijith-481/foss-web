import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, SocialsComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {}
