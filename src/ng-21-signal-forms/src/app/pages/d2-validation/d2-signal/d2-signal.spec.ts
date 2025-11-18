import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D2Signal } from './d2-signal';

describe('D2Signal', () => {
  let component: D2Signal;
  let fixture: ComponentFixture<D2Signal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D2Signal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D2Signal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
