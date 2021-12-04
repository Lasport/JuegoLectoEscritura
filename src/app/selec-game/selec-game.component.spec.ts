import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecGameComponent } from './selec-game.component';

describe('SelecGameComponent', () => {
  let component: SelecGameComponent;
  let fixture: ComponentFixture<SelecGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
