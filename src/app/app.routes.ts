import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {} from './blog/blog-detail/blog-detail.component';
import { EventComponent } from './events/event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about',
  },
  {
    path: 'blogs',
    component: BlogComponent,
    title: 'Blog',
  },

  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery',
  },
  {
    path: 'events',
    component: EventComponent,
    title: 'Events',
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    title: 'post',
  },
  {
    path: 'event/:id',
    component: EventDetailComponent,
    title: 'post',
  },
  { path: '**', redirectTo: '' },
];
