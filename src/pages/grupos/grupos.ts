import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddGruposPage } from '../add-grupos/add-grupos';
import { DetGruposPage } from '../det-grupos/det-grupos';

@IonicPage()
@Component({
  selector: 'page-grupos',
  templateUrl: 'grupos.html',
})
export class GruposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GruposPage');
  }

  addGrupo(){
    this.navCtrl.push(AddGruposPage);
  };

  getDetGrup(){
    this.navCtrl.push(DetGruposPage);
  }
}
