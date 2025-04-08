import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';

import { Event } from '../event.model';
import { EventPageComponent } from '../event-page/event-page.component';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [EventPageComponent, AsyncPipe],
  templateUrl: './event-detail.component.html',
})
export class EventDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private http = inject(HttpClient);

  public event$: Observable<Event | undefined> | undefined;
  private eventsUrl = 'events.json';

  ngOnInit(): void {
    this.loadevent();
  }

  loadevent(): void {
    this.event$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const idParam = params.get('id');
        if (!idParam) {
          console.error('err');
          return of(undefined);
        }

        const eventId = +idParam;
        if (isNaN(eventId)) {
          console.error(idParam);
          return of(undefined);
        }
        return this.http.get<Event[]>(this.eventsUrl).pipe(
          map((events) => events.find((event) => event.id === eventId)),
          catchError((error) => {
            console.error(error);
            return of(undefined);
          }),
        );
      }),
    );
  }
}
