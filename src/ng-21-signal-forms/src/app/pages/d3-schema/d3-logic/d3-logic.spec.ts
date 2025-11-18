import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3Logic } from './d3-logic';

describe('D3Logic', () => {
  let component: D3Logic;
  let fixture: ComponentFixture<D3Logic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [D3Logic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3Logic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
