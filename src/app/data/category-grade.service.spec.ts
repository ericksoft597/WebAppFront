import { TestBed } from '@angular/core/testing';

import { CategoryGradeService } from './category-grade.service';

describe('CategoryGradeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryGradeService = TestBed.get(CategoryGradeService);
    expect(service).toBeTruthy();
  });
});
