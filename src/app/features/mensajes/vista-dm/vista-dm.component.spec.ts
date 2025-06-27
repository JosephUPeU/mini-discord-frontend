import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDmComponent } from './vista-dm.component';

describe('VistaDmComponent', () => {
  let component: VistaDmComponent;
  let fixture: ComponentFixture<VistaDmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaDmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaDmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
