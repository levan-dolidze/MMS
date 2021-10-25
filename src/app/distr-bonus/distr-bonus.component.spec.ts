import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrBonusComponent } from './distr-bonus.component';

describe('DistrBonusComponent', () => {
  let component: DistrBonusComponent;
  let fixture: ComponentFixture<DistrBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
