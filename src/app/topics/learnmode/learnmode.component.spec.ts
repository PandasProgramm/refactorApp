import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnmodeComponent } from './learnmode.component';

describe('LearnmodeComponent', () => {
  let component: LearnmodeComponent;
  let fixture: ComponentFixture<LearnmodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnmodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
