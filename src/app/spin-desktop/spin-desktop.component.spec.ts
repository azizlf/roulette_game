import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinDesktopComponent } from './spin-desktop.component';

describe('SpinDesktopComponent', () => {
  let component: SpinDesktopComponent;
  let fixture: ComponentFixture<SpinDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
