import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiporecordatorioComponent } from './tiporecordatorio.component';

describe('TiporecordatorioComponent', () => {
  let component: TiporecordatorioComponent;
  let fixture: ComponentFixture<TiporecordatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiporecordatorioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiporecordatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
