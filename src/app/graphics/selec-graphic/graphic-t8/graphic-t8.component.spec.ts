import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicT8Component } from './graphic-t8.component';

describe('GraphicT8Component', () => {
  let component: GraphicT8Component;
  let fixture: ComponentFixture<GraphicT8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicT8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicT8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
