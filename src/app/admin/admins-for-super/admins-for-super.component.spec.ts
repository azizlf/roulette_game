import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsForSuperComponent } from './admins-for-super.component';

describe('AdminsForSuperComponent', () => {
  let component: AdminsForSuperComponent;
  let fixture: ComponentFixture<AdminsForSuperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsForSuperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsForSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
