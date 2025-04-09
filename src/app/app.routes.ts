import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {} from './blog/blog-detail/blog-detail.component';
import { EventComponent } from './events/event.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { AboutComponent } from './about/about.component';

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
    title: 'Blogs',
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
