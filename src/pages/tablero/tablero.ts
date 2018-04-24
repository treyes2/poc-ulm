import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiciosPage } from '../servicios/servicios';
import { GruposPage } from '../grupos/grupos'
import { DatosPage } from '../datos/datos';

@IonicPage()
@Component({
  selector: 'page-tablero',
  templateUrl: 'tablero.html',
})
export class TableroPage {
  public first_name;

  unTextoRecibido: string; 
  unNombreRecibido: any; 

  //datos user
  paramsParaSegPag: any;

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
  total: any;

  paramsParaServicePag: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.first_name = navParams.get("name");
    //console.log("Nombre2: "+this.first_name);
    this.unTextoRecibido = navParams.get("unTexto");
    this.name = navParams.get("nombre");
    this.name2 = navParams.get("nombre2");
    this.apePaterno = navParams.get("apePaterno");
    this.apeMaterno = navParams.get("apeMaterno");
    this.dni = navParams.get("dni");
    this.correo = navParams.get("correo");
    this.login = navParams.get("login");
    this.sexo = navParams.get("sexo");

    this.total = navParams.get("totalProf");
    //console.log("totalProf tablero : "+this.total);

    this.paramsParaServicePag = {
      servicios:this.total
    };

    this.paramsParaSegPag = {
      nombre: this.name,
      nombre2: this.name2,
      apePaterno:this.apePaterno,
      apeMaterno:this.apeMaterno,
      dni:this.dni,
      correo:this.correo,
      login:this.login,
      sexo: this.sexo
    };
   // console.log("datos usuario : "+this.paramsParaSegPag['nombre']);
   // console.log("datos usuario : "+this.paramsParaSegPag['apePaterno']);
   // console.log("datos usuario : "+this.paramsParaSegPag['login']);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TableroPage');
  }
  openServiciosPage(){
    this.navCtrl.push(ServiciosPage, this.paramsParaServicePag);
  };

  openGruposPage(){
    this.navCtrl.push(GruposPage);
  };

  getDatosPage(){
    this.navCtrl.push(DatosPage, this.paramsParaSegPag);
  };



}
