import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecGraphicComponent } from './selec-graphic.component';

describe('SelecGraphicComponent', () => {
  let component: SelecGraphicComponent;
  let fixture: ComponentFixture<SelecGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecGraphicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
