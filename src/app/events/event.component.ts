import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Event } from './event.model';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
@Component({
  selector: 'app-event',
  imports: [AsyncPipe, RouterLink, TruncatePipe],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent {
  private http = inject(HttpClient);
  public events$: Observable<Event[]> | undefined;
  public previewLength: number = 50;
  private eventsUrl = 'events.json';

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events$ = this.http.get<Event[]>(this.eventsUrl);
  }
}
