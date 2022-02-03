import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicAf3Component } from './graphic-af3.component';

describe('GraphicAf3Component', () => {
  let component: GraphicAf3Component;
  let fixture: ComponentFixture<GraphicAf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicAf3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicAf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
