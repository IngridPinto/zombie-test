import { TestBed } from '@angular/core/testing';

import { ControleRecursoService } from './controlerecurso.service';

describe('ControlerecursoService', () => {
  let service: ControleRecursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleRecursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
