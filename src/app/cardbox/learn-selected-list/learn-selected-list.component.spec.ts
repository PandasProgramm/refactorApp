import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSelectedListComponent } from './learn-selected-list.component';

describe('LearnSelectedListComponent', () => {
  let component: LearnSelectedListComponent;
  let fixture: ComponentFixture<LearnSelectedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSelectedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
