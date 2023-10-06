import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAuthComponent } from './player-auth.component';

describe('PlayerAuthComponent', () => {
  let component: PlayerAuthComponent;
  let fixture: ComponentFixture<PlayerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
