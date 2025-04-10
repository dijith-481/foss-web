import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { BlogPageComponent } from '../blog-page/blog-page.component';
import { Blog } from '../blog.model';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [BlogPageComponent, AsyncPipe],
  templateUrl: './blog-detail.component.html',
})
export class BlogDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  public blog$: Observable<Blog | undefined> | undefined;
  private blogsUrl = 'blogs.json';

  ngOnInit(): void {
    this.loadBlog();
  }

  loadBlog(): void {
    this.blog$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const idParam = params.get('id');
        if (!idParam) {
          console.error('err');
          return of(undefined);
        }

        const blogId = +idParam;
        if (isNaN(blogId)) {
          console.error(idParam);
          return of(undefined);
        }
        return this.http.get<Blog[]>(this.blogsUrl).pipe(
          map((blogs) => blogs.find((blog) => blog.id === blogId)),
          catchError((error) => {
            console.error(error);
            return of(undefined);
          }),
        );
      }),
    );
  }
}
