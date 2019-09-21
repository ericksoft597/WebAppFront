import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEditorialComponent } from './listar-editorial.component';

describe('ListarEditorialComponent', () => {
  let component: ListarEditorialComponent;
  let fixture: ComponentFixture<ListarEditorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEditorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
