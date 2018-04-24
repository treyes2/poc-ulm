import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompartirServicePage } from '../compartir-service/compartir-service';
import { ConfigurarServicePage } from '../configurar-service/configurar-service';

@IonicPage()
@Component({
  selector: 'page-servicios',
  templateUrl: 'servicios.html',
})
export class ServiciosPage {
  servicios: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.servicios = navParams.get("servicios");
      //console.log("this.servicios = "+this.servicios);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosPage');
  }

  compartir(){
    this.navCtrl.push(CompartirServicePage);
  };
  configurar(){
    this.navCtrl.push(ConfigurarServicePage);
  }
   
    ;
}
