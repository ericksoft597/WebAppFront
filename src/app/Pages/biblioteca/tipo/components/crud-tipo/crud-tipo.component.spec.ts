import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTipoComponent } from './crud-tipo.component';

describe('CrudTipoComponent', () => {
  let component: CrudTipoComponent;
  let fixture: ComponentFixture<CrudTipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
