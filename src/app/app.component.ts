import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'casino-games';
  categories :any;
  materialicons : any;
  loading=false;

  constructor(private configService : ConfigService){
    this.getCasino();
    this.materialicons = this.configService.materialicons;
  }


  getCasino() {
    this.loading=true;
    this.configService.getCasinoResponse()
      .subscribe(resp => {
        this.loading=false;
        this.categories = this.configService.categories = resp.casino.categories;
        this.configService.games = resp.casino.games;
      });
  }

}
