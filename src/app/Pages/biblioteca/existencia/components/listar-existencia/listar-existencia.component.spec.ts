import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarExistenciaComponent } from './listar-existencia.component';

describe('ListarExistenciaComponent', () => {
  let component: ListarExistenciaComponent;
  let fixture: ComponentFixture<ListarExistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarExistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
