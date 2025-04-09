import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';

@Component({
  selector: 'app-blog-page',
  imports: [BackButtonComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css',
})
export class BlogPageComponent {
  @ViewChild('element') element!: ElementRef<HTMLElement>;
  @Input({ required: true }) blogTitle!: string;
  @Input({ required: true }) description!: string;
  @Input() imageUrl?: string;
  @Input() author?: string;
  @Input() dateTime?: string | Date;
  @Input() subtitle?: string;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.element.nativeElement.classList.add('fade-in');
    }, 0);
  }
}
