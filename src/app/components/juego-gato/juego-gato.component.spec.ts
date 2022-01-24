import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoGatoComponent } from './juego-gato.component';

describe('JuegoGatoComponent', () => {
  let component: JuegoGatoComponent;
  let fixture: ComponentFixture<JuegoGatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoGatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoGatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
