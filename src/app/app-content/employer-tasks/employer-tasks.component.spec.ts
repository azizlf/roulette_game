import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerTasksComponent } from './employer-tasks.component';

describe('EmployerTasksComponent', () => {
  let component: EmployerTasksComponent;
  let fixture: ComponentFixture<EmployerTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployerTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployerTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
