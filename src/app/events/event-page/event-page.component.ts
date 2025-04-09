import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { BackButtonComponent } from '../../ui/back-button/back-button.component';

@Component({
  selector: 'app-event-page',
  imports: [BackButtonComponent],
  templateUrl: './event-page.component.html',
  styleUrl: './event-page.component.css',
})
export class EventPageComponent {
  @ViewChild('element') element!: ElementRef<HTMLElement>;
  @Input({ required: true }) eventTitle!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) imageUrl!: string;
  @Input() buttonContent!: string;
  @Input() buttonUrl!: string;
  openUrl() {
    window.open(this.buttonUrl, '_blank');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.element.nativeElement.classList.add('fade-in');
    }, 0);
  }
}
