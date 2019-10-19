import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAreasComponent } from './crud-areas.component';

describe('CrudAreasComponent', () => {
  let component: CrudAreasComponent;
  let fixture: ComponentFixture<CrudAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
