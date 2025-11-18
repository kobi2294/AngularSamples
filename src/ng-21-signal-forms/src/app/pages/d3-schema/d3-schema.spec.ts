import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Schema } from './d3-schema';

describe('D3Schema', () => {
  let component: D3Schema;
  let fixture: ComponentFixture<D3Schema>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3Schema]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3Schema);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
