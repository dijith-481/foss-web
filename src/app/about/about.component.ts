import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { BackButtonComponent } from '../ui/back-button/back-button.component';
import { CoreteamComponent } from '../coreteam/coreteam.component';

@Component({
  selector: 'app-about',
  imports: [BackButtonComponent, CoreteamComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  @ViewChild('element') element!: ElementRef<HTMLElement>;
  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    this.element.nativeElement.classList.add('fade-in');
  }
}
