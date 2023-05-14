import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router, RoutesRecognized, Event } from '@angular/router';
import { ConfigService } from '../config/config.service';
import {MatDialog} from '@angular/material/dialog';
import { DeviceDetectorService } from 'ngx-device-detector';
import { GameDialogueComponent } from '../game-dialogue/game-dialogue.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent{
  category: any;
  games :any;
  gameIdArray: any;
  deviceInfo :any;
  isDesktopDevice: boolean=false;

  constructor(private router: Router, private configService : ConfigService, private route: ActivatedRoute, public dialog: MatDialog, private deviceService: DeviceDetectorService){
     this.category = this.route.snapshot.paramMap.get('name');
     this.games = this.configService?.games;
     for (let i=0; i<=this.configService?.categories?.length; i++) {
       if(this.category === this.configService?.categories[i].name){
         this.gameIdArray = this.configService?.categories[i].games;
         break;
       }
       console.log(this.category,this.games)
     }

    //on change of url
    router.events.subscribe((event: Event) => {
      if (event instanceof RoutesRecognized) {
        this.category = decodeURI(event.url.split('/category/')[1]);
        this.games = this.configService?.games;
        for (let i=0; i<=this.configService?.categories?.length; i++) {
          if(this.category === this.configService?.categories[i].name){
            this.gameIdArray = this.configService?.categories[i].games;
            break;
          }
          console.log(this.category,this.games)
        }
      }
    })

    this.epicFunction();
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

  epicFunction() {
    console.log('hello `Home` component');
    this.deviceInfo = this.deviceService.getDeviceInfo();
    //const isMobile = this.deviceService.isMobile();
    //const isTablet = this.deviceService.isTablet();
    this.isDesktopDevice = this.deviceService.isDesktop();
    //console.log(this.deviceInfo);
    //console.log(this.isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    //console.log(isTablet);  // returns if the device us a tablet (iPad etc)
    console.log(this.isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}

