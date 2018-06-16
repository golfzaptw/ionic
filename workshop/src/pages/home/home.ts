import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  curren = {
    currency:null
  }
  usd:number=0;
  sgd:number=0;
  lak:number=0;
  constructor(public navCtrl: NavController) {

  }
  changeCurrency(){
    this.usd = this.curren.currency*0.030903323578300366
    this.sgd = this.curren.currency*0.041639019493396046
    this.lak = this.curren.currency*258.9995269631031
  }
}
