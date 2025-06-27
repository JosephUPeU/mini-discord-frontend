import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCanalesComponent } from './lista-canales.component';

describe('ListaCanalesComponent', () => {
  let component: ListaCanalesComponent;
  let fixture: ComponentFixture<ListaCanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCanalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
