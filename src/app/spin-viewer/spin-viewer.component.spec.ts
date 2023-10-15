import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinViewerComponent } from './spin-viewer.component';

describe('SpinViewerComponent', () => {
  let component: SpinViewerComponent;
  let fixture: ComponentFixture<SpinViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
