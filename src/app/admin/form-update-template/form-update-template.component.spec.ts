import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateTemplateComponent } from './form-update-template.component';

describe('FormUpdateTemplateComponent', () => {
  let component: FormUpdateTemplateComponent;
  let fixture: ComponentFixture<FormUpdateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormUpdateTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormUpdateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
