import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGradosComponent } from './crud-grados.component';

describe('CrudGradosComponent', () => {
  let component: CrudGradosComponent;
  let fixture: ComponentFixture<CrudGradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudGradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
