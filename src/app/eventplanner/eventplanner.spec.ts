import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventplanner } from './eventplanner';

describe('Eventplanner', () => {
  let component: Eventplanner;
  let fixture: ComponentFixture<Eventplanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventplanner],
    }).compileComponents();

    fixture = TestBed.createComponent(Eventplanner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
