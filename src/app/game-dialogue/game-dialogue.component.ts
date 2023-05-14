import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  assets: {mobileThumbnail?: any, desktopThumbnail?: any},
  gameId: '',
  name: '',
  isDesktopDevice: boolean
}

@Component({
  selector: 'app-game-dialogue',
  templateUrl: './game-dialogue.component.html',
  styleUrls: ['./game-dialogue.component.scss']
})
export class GameDialogueComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
