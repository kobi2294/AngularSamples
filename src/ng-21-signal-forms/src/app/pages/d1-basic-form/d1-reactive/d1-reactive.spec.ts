import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Reactive } from './d1-reactive';

describe('D1Reactive', () => {
  let component: D1Reactive;
  let fixture: ComponentFixture<D1Reactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D1Reactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D1Reactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
