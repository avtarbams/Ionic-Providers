import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  details = this.navParams.get('moviename');
  hero = this.navParams.get('hero');
  year = this.navParams.get('year');
  actor = this.navParams.get('actor');
  director = this.navParams.get('dir');

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  closeModal(){
    this.navCtrl.pop();
  }
}
