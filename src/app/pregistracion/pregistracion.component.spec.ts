import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregistracionComponent } from './pregistracion.component';

describe('PregistracionComponent', () => {
  let component: PregistracionComponent;
  let fixture: ComponentFixture<PregistracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregistracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregistracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
