import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FollowMouseComponent } from './follow-mouse/follow-mouse.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LandingComponent,
    BlogComponent,
    GalleryComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    FollowMouseComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fossmec-landing';
}
