import {
  Component,
  inject,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { BackButtonComponent } from '../ui/back-button/back-button.component';

@Component({
  selector: 'app-gallery',
  imports: [RouterLink, AsyncPipe, BackButtonComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  @ViewChild('element') element!: ElementRef<HTMLElement>;
  private http = inject(HttpClient);
  public images$: Observable<Image[]> | undefined;
  public previewLength: number = 150;
  private imageUrl = 'gallery.json';

  ngOnInit(): void {
    this.loadImages();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.element.nativeElement.classList.add('fade-in');
    }, 0);
  }

  loadImages(): void {
    this.images$ = this.http.get<Image[]>(this.imageUrl);
  }
}
interface Image {
  id: number;
  imageTitle: string;
  imageUrl: string;
}
