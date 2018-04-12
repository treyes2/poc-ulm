import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosPage } from '../servicios/servicios';
import { GruposPage } from '../grupos/grupos'

@IonicPage()
@Component({
  selector: 'page-tablero',
  templateUrl: 'tablero.html',
})
export class TableroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableroPage');
  }
  openServiciosPage(){
    this.navCtrl.push(ServiciosPage);
  };

  openGruposPage(){
    this.navCtrl.push(GruposPage);
  };
}
