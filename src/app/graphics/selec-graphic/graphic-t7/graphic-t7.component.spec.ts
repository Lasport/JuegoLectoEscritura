import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicT7Component } from './graphic-t7.component';

describe('GraphicT7Component', () => {
  let component: GraphicT7Component;
  let fixture: ComponentFixture<GraphicT7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicT7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicT7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
