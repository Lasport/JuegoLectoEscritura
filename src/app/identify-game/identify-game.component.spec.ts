import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyGameComponent } from './identify-game.component';

describe('IdentifyGameComponent', () => {
  let component: IdentifyGameComponent;
  let fixture: ComponentFixture<IdentifyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
