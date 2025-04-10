import { Component } from '@angular/core';
import { LandingComponent } from '../landing/landing.component';
import { EventComponent } from '../events/event.component';
import { BlogComponent } from '../blog/blog.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { FooterComponent } from '../footer/footer.component';
import { CoreteamComponent } from '../coreteam/coreteam.component';

@Component({
  selector: 'app-home',
  imports: [
    LandingComponent,
    CoreteamComponent,

    FooterComponent,
    EventComponent,
    BlogComponent,
    GalleryComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
