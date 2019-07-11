import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsHomeComponent } from './colors-home.component';

describe('ColorsHomeComponent', () => {
  let component: ColorsHomeComponent;
  let fixture: ComponentFixture<ColorsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
