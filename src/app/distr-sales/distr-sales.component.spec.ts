import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrSalesComponent } from './distr-sales.component';

describe('DistrSalesComponent', () => {
  let component: DistrSalesComponent;
  let fixture: ComponentFixture<DistrSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
