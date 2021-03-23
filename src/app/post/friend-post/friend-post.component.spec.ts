import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendPostComponent } from './friend-post.component';

describe('FriendPostComponent', () => {
  let component: FriendPostComponent;
  let fixture: ComponentFixture<FriendPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
