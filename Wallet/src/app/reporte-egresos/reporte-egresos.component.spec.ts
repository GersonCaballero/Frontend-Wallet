import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteEgresosComponent } from './reporte-egresos.component';

describe('ReporteEgresosComponent', () => {
  let component: ReporteEgresosComponent;
  let fixture: ComponentFixture<ReporteEgresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteEgresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteEgresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
