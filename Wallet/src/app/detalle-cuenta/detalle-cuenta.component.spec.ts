import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCuentaComponent } from './detalle-cuenta.component';

describe('DetalleCuentaComponent', () => {
  let component: DetalleCuentaComponent;
  let fixture: ComponentFixture<DetalleCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
