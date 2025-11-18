import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Reactive } from './d3-reactive';

describe('D3Reactive', () => {
  let component: D3Reactive;
  let fixture: ComponentFixture<D3Reactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3Reactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3Reactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
