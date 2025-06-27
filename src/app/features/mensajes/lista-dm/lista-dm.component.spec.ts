import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDmComponent } from './lista-dm.component';

describe('ListaDmComponent', () => {
  let component: ListaDmComponent;
  let fixture: ComponentFixture<ListaDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaDmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
