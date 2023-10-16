import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinMobileComponent } from './spin-mobile.component';

describe('SpinMobileComponent', () => {
  let component: SpinMobileComponent;
  let fixture: ComponentFixture<SpinMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
