import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTiketComponent } from './player-tiket.component';

describe('PlayerTiketComponent', () => {
  let component: PlayerTiketComponent;
  let fixture: ComponentFixture<PlayerTiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerTiketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerTiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
