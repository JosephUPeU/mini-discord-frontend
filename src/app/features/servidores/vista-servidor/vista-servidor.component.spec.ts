import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaServidorComponent } from './vista-servidor.component';

describe('VistaServidorComponent', () => {
  let component: VistaServidorComponent;
  let fixture: ComponentFixture<VistaServidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaServidorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaServidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
