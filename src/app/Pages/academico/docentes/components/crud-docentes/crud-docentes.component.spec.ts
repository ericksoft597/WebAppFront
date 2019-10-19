import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDocentesComponent } from './crud-docentes.component';

describe('CrudDocentesComponent', () => {
  let component: CrudDocentesComponent;
  let fixture: ComponentFixture<CrudDocentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDocentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
