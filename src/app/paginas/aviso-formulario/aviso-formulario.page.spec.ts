import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvisoFormularioPage } from './aviso-formulario.page';

describe('AvisoFormularioPage', () => {
  let component: AvisoFormularioPage;
  let fixture: ComponentFixture<AvisoFormularioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoFormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
