import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModulosComponent } from './crud-modulos.component';

describe('CrudModulosComponent', () => {
  let component: CrudModulosComponent;
  let fixture: ComponentFixture<CrudModulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
