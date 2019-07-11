import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwatchesListComponent } from './swatches-list.component';

describe('SwatchesListComponent', () => {
  let component: SwatchesListComponent;
  let fixture: ComponentFixture<SwatchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwatchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwatchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
