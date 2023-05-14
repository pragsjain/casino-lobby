import { Component } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GameDialogueComponent } from '../game-dialogue/game-dialogue.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-casino',
  templateUrl: './casino.component.html',
  styleUrls: ['./casino.component.scss']
})
export class CasinoComponent {

  categories :any;
  games :any;
  showAll = false;
  materialicons: any;
  deviceInfo :any;
  isDesktopDevice: boolean=false;
  gameSearchText: any;
  filteredGames:any=[];
  isSearched: boolean;

  constructor(private configService : ConfigService, private deviceService: DeviceDetectorService, public dialog: MatDialog,){
    this.materialicons = this.configService.materialicons;
    this.categories = this.configService.categories ;
    this.games = this.configService.games;
    this.epicFunction();
    this.isSearched =false;
  }

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    //const isMobile = this.deviceService.isMobile();
    //const isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    //console.log(this.deviceInfo);
    //console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    //console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    //console.log(this.isDesktopDevice); // returns if the app is running on a Desktop browser.
  }

  showAllGames(category: any) {
    console.log(this.showAll, category)
  }

  searchGame() {
    this.isSearched =true;
    //allRestaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()));
    console.log(this.configService.games, this.gameSearchText)
    this.filteredGames=Object.values(this.configService.games).filter((game: any) => {
      return game.name.toLowerCase().includes(this.gameSearchText.toLowerCase());
    })
  }

  openGame(game: any) {
    console.log(game,this.games[game.gameId]);
    this.dialog.open(GameDialogueComponent, {
      data: {
        name : this.games[game.gameId].name,
        assets: this.games[game.gameId].assets,
        gameId: this.games[game.gameId].gameId,
        isDesktopDevice: this.isDesktopDevice
      },
    });
  }

}

