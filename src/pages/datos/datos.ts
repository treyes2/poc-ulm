import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

  //profile
  name: any;
  name2: any;
  apePaterno: any;
  apeMaterno: any;
  dni: any;
  correo: any;
  login: any;
  sexo: any;
  //fin profile

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.name = navParams.get("nombre");
    this.name2 = navParams.get("nombre2");
    this.apePaterno = navParams.get("apePaterno");
    this.apeMaterno = navParams.get("apeMaterno");
    this.dni = navParams.get("dni");
    this.correo = navParams.get("correo");
    this.login = navParams.get("login");
    this.sexo = navParams.get("sexo");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');
  }

}
