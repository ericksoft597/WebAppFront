import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAulasComponent } from './crud-aulas.component';

describe('CrudAulasComponent', () => {
  let component: CrudAulasComponent;
  let fixture: ComponentFixture<CrudAulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
