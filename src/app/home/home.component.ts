import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { HeaderComponent } from '../header/header.component';
import { EventComponent } from '../events/event.component';
import { BlogComponent } from '../blog/blog.component';

@Component({
  selector: 'app-home',
  imports: [LandingComponent, HeaderComponent, EventComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
