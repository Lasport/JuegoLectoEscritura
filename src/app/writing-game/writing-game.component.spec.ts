import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingGameComponent } from './writing-game.component';

describe('WritingGameComponent', () => {
  let component: WritingGameComponent;
  let fixture: ComponentFixture<WritingGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritingGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
