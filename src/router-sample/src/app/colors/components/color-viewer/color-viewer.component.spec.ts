import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorViewerComponent } from './color-viewer.component';

describe('ColorViewerComponent', () => {
  let component: ColorViewerComponent;
  let fixture: ComponentFixture<ColorViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
