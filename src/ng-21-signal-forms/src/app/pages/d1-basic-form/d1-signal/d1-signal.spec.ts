import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Signal } from './d1-signal';

describe('D1Signal', () => {
  let component: D1Signal;
  let fixture: ComponentFixture<D1Signal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D1Signal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D1Signal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
