import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleRecursoComponent } from './controlerecurso.component';

describe('ControleRecursoComponent', () => {
  let component: ControleRecursoComponent;
  let fixture: ComponentFixture<ControleRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleRecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
