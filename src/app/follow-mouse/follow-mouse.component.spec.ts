import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowMouseComponent } from './follow-mouse.component';

describe('FollowMouseComponent', () => {
  let component: FollowMouseComponent;
  let fixture: ComponentFixture<FollowMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowMouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
