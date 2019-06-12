import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteIngresosComponent } from './reporte-ingresos.component';

describe('ReporteIngresosComponent', () => {
  let component: ReporteIngresosComponent;
  let fixture: ComponentFixture<ReporteIngresosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteIngresosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteIngresosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
