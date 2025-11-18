import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D2Reactive } from './d2-reactive';

describe('D2Reactive', () => {
  let component: D2Reactive;
  let fixture: ComponentFixture<D2Reactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D2Reactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D2Reactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
