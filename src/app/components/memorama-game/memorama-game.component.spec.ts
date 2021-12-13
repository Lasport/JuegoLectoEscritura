import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoramaGameComponent } from './memorama-game.component';

describe('MemoramaGameComponent', () => {
  let component: MemoramaGameComponent;
  let fixture: ComponentFixture<MemoramaGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoramaGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoramaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
