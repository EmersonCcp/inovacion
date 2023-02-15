import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorColegiosComponent } from './buscador-colegios.component';

describe('BuscadorColegiosComponent', () => {
  let component: BuscadorColegiosComponent;
  let fixture: ComponentFixture<BuscadorColegiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorColegiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorColegiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
