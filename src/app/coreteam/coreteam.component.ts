import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-coreteam',
  imports: [AsyncPipe],
  templateUrl: './coreteam.component.html',
  styleUrl: './coreteam.component.css',
})
export class CoreteamComponent {
  private http = inject(HttpClient);
  public core$: Observable<Core[]> | undefined;
  public previewLength: number = 150;
  private coreUrl = 'coreteam.json';

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.core$ = this.http.get<Core[]>(this.coreUrl);
  }
}

export interface Core {
  id: number;
  name: string;
  imageUrl: string;
  position: string;
}
