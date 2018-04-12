import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddContactoPage } from '../add-contacto/add-contacto';


@IonicPage()
@Component({
  selector: 'page-det-grupos',
  templateUrl: 'det-grupos.html',
})
export class DetGruposPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetGruposPage');
  }

  addContac(){
    this.navCtrl.push(AddContactoPage);
  };
  editar(){

  };

  eliminar(){
    
  };

}
