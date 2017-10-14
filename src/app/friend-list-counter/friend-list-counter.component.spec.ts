import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendListCounterComponent } from './friend-list-counter.component';

describe('FriendListCounterComponent', () => {
  let component: FriendListCounterComponent;
  let fixture: ComponentFixture<FriendListCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendListCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
