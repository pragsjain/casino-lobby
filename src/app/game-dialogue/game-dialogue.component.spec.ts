import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDialogueComponent } from './game-dialogue.component';

describe('GameDialogueComponent', () => {
  let component: GameDialogueComponent;
  let fixture: ComponentFixture<GameDialogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDialogueComponent]
    });
    fixture = TestBed.createComponent(GameDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
