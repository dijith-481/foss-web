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
  maxSquareSize = 100;
  mouseMoveTimeout: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.squareSize = this.maxSquareSize;
    this.x = event.clientX - this.maxSquareSize / 2;
    this.y = event.clientY - this.maxSquareSize / 2;

    clearTimeout(this.mouseMoveTimeout);
    this.mouseMoveTimeout = setInterval(() => {
      this.squareSize -= 1;
    }, 20);
  }
}
