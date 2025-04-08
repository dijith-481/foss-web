import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'blogs',
    component: BlogComponent,
    title: 'Blogs',
  },
  {
    path: 'blog/:id',
    component: BlogDetailComponent,
    title: 'post',
  },
  { path: '**', redirectTo: '' },
];
