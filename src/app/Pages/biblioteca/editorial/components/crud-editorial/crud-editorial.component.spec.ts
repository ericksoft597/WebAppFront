import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEditorialComponent } from './crud-editorial.component';

describe('CrudEditorialComponent', () => {
  let component: CrudEditorialComponent;
  let fixture: ComponentFixture<CrudEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
