import {
  Component,
  ViewChild,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('opacity') opacityElement!: ElementRef<HTMLElement>;
  @ViewChild('sidemenu') sideMenuElement!: ElementRef<HTMLElement>;
  @ViewChild('sidemenucontent')
  sideMenuContentElement!: ElementRef<HTMLElement>;
  @Input() maxBlurPx: number = 10;
  @Input() maxopacity: number = 10;
  @Input() opacityStart: number = 300;

  @Input() scrollRangePx: number = 800;
  sideMenuState = false;

  currentOpacity: number = 0;
  constructor(
    private renderer: Renderer2,
    private location: Location,
  ) {}
  ngAfterViewInit(): void {
    if (this.location.path() === '') {
      this.updateOpacity();
      if (this.opacityElement) {
        this.renderer.setStyle(
          this.opacityElement.nativeElement,
          'will-change',
          'opacity,visibility',
        );
      }
    }
    this.location.onUrlChange(() => {
      this.checkPath();
    });
  }
  checkPath() {
    if (this.location.path() !== '') {
      this.renderer.setStyle(this.opacityElement.nativeElement, 'opacity', 1);
      this.renderer.setStyle(
        this.opacityElement.nativeElement,
        'visibility',
        'visible',
      );
    } else {
      this.renderer.setStyle(this.opacityElement.nativeElement, 'opacity', 0);

      this.renderer.setStyle(
        this.opacityElement.nativeElement,
        'visibility',
        'hidden',
      );
    }
  }
  openSideMenu() {
    if (this.sideMenuState) {
      this.sideMenuState = false;
      this.sideMenuContentElement.nativeElement.style.opacity = '0';
      this.sideMenuElement.nativeElement.classList.remove('visible');
    } else {
      this.sideMenuState = true;
      this.sideMenuElement.nativeElement.classList.add('visible');
      this.sideMenuContentElement.nativeElement.style.opacity = '1';
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (this.location.path() === '') {
      this.updateOpacity();
    }
  }
  private updateOpacity(): void {
    if (!this.opacityElement) {
      return;
    }

    const scrollY = window.scrollY;
    let scrollFraction = (scrollY - this.opacityStart) / this.scrollRangePx;
    scrollFraction = Math.min(1, Math.max(0, scrollFraction));
    this.currentOpacity = scrollFraction * this.maxBlurPx;
    if (scrollY < 300) {
      this.renderer.setStyle(
        this.opacityElement.nativeElement,
        'visibility',
        'hidden',
      );
    } else {
      this.renderer.setStyle(
        this.opacityElement.nativeElement,
        'visibility',
        'visible',
      );
    }
    this.renderer.setStyle(
      this.opacityElement.nativeElement,
      'opacity',
      scrollFraction.toFixed(2),
    );
  }
}
