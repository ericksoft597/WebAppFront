import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMateriasComponent } from './crud-materias.component';

describe('CrudMateriasComponent', () => {
  let component: CrudMateriasComponent;
  let fixture: ComponentFixture<CrudMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
