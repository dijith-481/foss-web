import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-follow-mouse',
  imports: [],
  templateUrl: './follow-mouse.component.html',
  styleUrl: './follow-mouse.component.css',
})
export class FollowMouseComponent {
  x = 0;
  y = 0;
  squareSize = 0;
  maxSquareSize = 130;
  mouseMoveTimeout: any;

  private handleMove(clientX: number, clientY: number) {
    this.squareSize = this.maxSquareSize;
    this.x = clientX - this.maxSquareSize / 2;
    this.y = clientY - this.maxSquareSize / 2;

    clearTimeout(this.mouseMoveTimeout);
    this.mouseMoveTimeout = setInterval(() => {
      this.squareSize -= 1;
      if (this.squareSize <= 0) {
        clearInterval(this.mouseMoveTimeout);
        this.squareSize = 0;
      }
    }, 20);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.handleMove(event.clientX, event.clientY);
  }

  @HostListener('document:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (event.touches.length > 0) {
      this.handleMove(event.touches[0].clientX, event.touches[0].clientY);
    }
  }
  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (event.touches.length > 0) {
      this.handleMove(event.touches[0].clientX, event.touches[0].clientY);
    }
  }
}
