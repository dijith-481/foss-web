import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Blog } from './blog.model';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
@Component({
  selector: 'app-blog',
  imports: [AsyncPipe, RouterLink, TruncatePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  private http = inject(HttpClient);
  public blogs$: Observable<Blog[]> | undefined;
  public previewLength: number = 300;
  private blogsUrl = 'blogs.json';

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.blogs$ = this.http.get<Blog[]>(this.blogsUrl);
  }
}
