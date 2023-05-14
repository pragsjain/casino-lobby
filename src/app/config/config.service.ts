import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  configUrl = 'http://ec2-18-130-236-146.eu-west-2.compute.amazonaws.com/casino.json';
  categories :any;
  games :any;
  materialicons =['thumb_up','view_list','work', 'favorite','trending_up', 'account_balance', 'games','queue'];
  constructor(private http: HttpClient) {
  }

  getCasinoResponse() {
    return this.http.get<any>(this.configUrl);
  }
}



