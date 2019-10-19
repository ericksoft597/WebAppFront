import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudExistenciaComponent } from './crud-existencia.component';

describe('CrudExistenciaComponent', () => {
  let component: CrudExistenciaComponent;
  let fixture: ComponentFixture<CrudExistenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudExistenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudExistenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
