import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TableroPage } from '../tablero/tablero';

@IonicPage({
 // name: 'page-mymovistar',
  segment: 'page-mymovistar'
})
@Component({
  selector: 'page-mymovistar',
  templateUrl: 'mymovistar.html',
})
export class MymovistarPage {
  items = [];

  fragments: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log("________PARAMETROS________")

    this.fragments = navParams.get('fragment');
    this.fragments = this.fragments.split("&");
    console.log(this.fragments)


    this.items = [
      {
        'title': 'Recarga en linea',
        'icon': 'phone-portrait',
        'color': '#0CA9EA'
      },
      {
        'title': 'Mundo Digital',
        'icon': 'globe',
        'color': '#0CA9EA'
      },
      {
        'title': 'Historial de Puntos',
        'icon': 'albums',
        'color': '#0CA9EA'
      },
      {
        'title': 'Ofertas y Promociones',
        'icon': 'list-box',
        'color': '#0CA9EA'
      },
      {
        'title': 'Tienda',
        'icon': 'cart',
        'color': '#0CA9EA'
      }
    ]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MymovistarPage');
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(TableroPage, { item: item });
  }


}
