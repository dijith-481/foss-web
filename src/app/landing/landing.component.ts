import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
  Input,
  AfterViewInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FollowMouseComponent } from '../follow-mouse/follow-mouse.component';

@Component({
  selector: 'app-landing',
  imports: [RouterLink, FollowMouseComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  @ViewChild('blur') blurelement1!: ElementRef<HTMLElement>;
  @ViewChild('blur2') blurelement2!: ElementRef<HTMLElement>;
  @ViewChild('blur3') blurelement3!: ElementRef<HTMLElement>;
  @Input() maxBlurPx: number = 10;
  @Input() blurstart: number = window.innerHeight / 80;
  @Input() scrollRangePx: number = window.innerHeight * 1.5;

  currentBlur: number = 0;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.updateBlur();
    if (this.blurelement1) {
      this.renderer.setStyle(
        this.blurelement1.nativeElement,
        'will-change',
        'opacity,display',
      );
    }
    if (this.blurelement2) {
      this.renderer.setStyle(
        this.blurelement2.nativeElement,
        'will-change',
        'filter',
      );
    }
    if (this.blurelement3) {
      this.renderer.setStyle(
        this.blurelement3.nativeElement,
        'will-change',
        'filter,display',
      );
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.updateBlur();
  }
  private updateBlur(): void {
    if (!this.blurelement1 || !this.blurelement2 || !this.blurelement3) {
      return;
    }

    const scrollY = window.scrollY;
    let scrollFraction = (scrollY - this.blurstart) / this.scrollRangePx;
    scrollFraction = Math.min(1, Math.max(0, scrollFraction));
    this.currentBlur = scrollFraction * this.maxBlurPx;
    let blurStyle = `blur(${this.currentBlur.toFixed(2)}px)`;
    if (scrollFraction == 1) {
      this.blurelement1.nativeElement.style.visibility = 'hidden';
      this.blurelement2.nativeElement.style.visibility = 'hidden';
      this.blurelement3.nativeElement.style.visibility = 'hidden';
    } else {
      this.blurelement1.nativeElement.style.visibility = 'visible';
      this.blurelement2.nativeElement.style.visibility = 'visible';
      this.blurelement3.nativeElement.style.visibility = 'visible';
    }
    this.renderer.setStyle(
      this.blurelement2.nativeElement,
      'filter',
      blurStyle,
    );
    this.renderer.setStyle(
      this.blurelement1.nativeElement,
      'opacity',
      (1 - scrollFraction).toFixed(2),
    );
    this.renderer.setStyle(
      this.blurelement3.nativeElement,
      'opacity',
      (1 - scrollFraction).toFixed(2),
    );
    this.renderer.setStyle(
      this.blurelement2.nativeElement,
      'opacity',
      (1 - scrollFraction * 1.3).toFixed(2),
    );
    this.renderer.setStyle(
      this.blurelement2.nativeElement,
      'transform',
      `translateY(${(-this.currentBlur * 35).toFixed(2)}px)`,
    );
    this.renderer.setStyle(
      this.blurelement1.nativeElement,
      'transform',
      `translateY(${(-this.currentBlur * 30).toFixed(2)}px)`,
    );
    blurStyle = `blur(${(this.currentBlur * 0.8).toFixed(2)}px)`;

    this.renderer.setStyle(
      this.blurelement1.nativeElement,
      'filter',
      blurStyle,
    );
  }
}
