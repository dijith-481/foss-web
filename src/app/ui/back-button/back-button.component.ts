import { Component, ElementRef, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  imports: [],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.css',
})
export class BackButtonComponent {
  constructor(private location: Location) {}

  @Input() element!: ElementRef<HTMLElement>;
  goBack(): void {
    this.element.nativeElement.classList.remove('fade-in');
    this.element.nativeElement.classList.add('fade-out');

    setTimeout(() => {
      this.location.back();
    }, 1000);
  }
}
