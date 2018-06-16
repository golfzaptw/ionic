import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  farmers: Array<object>;
  todo = {
    name: null,
    age: null,
    tel: null

  };

  constructor(public navCtrl: NavController) {
    this.farmers = [{
      name: 'Golf',
      age: 22,
      tel: '012345678'
    }, {
      name: 'Ja',
      age: 21,
      tel: '01'
    }, {
      name: 'Sa',
      age: 19,
      tel: '55555'
    }]
  }

  detail(farmer) {
    this.navCtrl.push(DetailPage,farmer)
  }
  addDetail() {
    this.farmers.push(this.todo)
  }
}
