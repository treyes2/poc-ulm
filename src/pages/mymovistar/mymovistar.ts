import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TableroPage } from '../tablero/tablero';
import { NativeStorage } from '@ionic-native/native-storage';
import { ProfileServiceProvider } from '../../providers/profile-service/profile-service';
import { LoadingController } from 'ionic-angular';

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
  totalProf = [];

  profiles: any;
  profiles2: any;
  profiles3: any;
  profiles4: any;

  fragments: any;
  fragment1: any;
  fragment2: any;
  fragment3: any;
  fragment4: any;
  fragment5: any;
  fragment6: any;
  access: string;
  token: string;
  expires: number;
  idToken: string;
  state: string;
  nonce: string;

  //datos user
  paramsParaSegPag: any;
  //fin datos user
  count: number;

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativeStorage: NativeStorage,
    private profileServiceProvider: ProfileServiceProvider,
    public loadingCtrl: LoadingController) {

    console.log("________PARAMETROS33________")

    this.fragments = navParams.get('fragment');
    this.fragments = this.fragments.split("&");
    console.log("primer log: " + this.fragments[0]);
    //1
    this.fragment1 = this.fragments[0].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    console.log("fragment1[1]: " + this.fragment1[1]);
    this.access = this.fragment1[1];
    console.log("access Token: " + this.access);

    //2
    this.fragment2 = this.fragments[1].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    console.log("fragment1[1]: " + this.fragment2[1]);
    this.token = this.fragment2[1];
    console.log("type Token: " + this.token);

    //3
    this.fragment3 = this.fragments[2].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    console.log("fragment3[1]: " + this.fragment3[1]);
    this.expires = this.fragment3[1];
    console.log("expires: " + this.expires);

    //4
    this.fragment4 = this.fragments[3].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    // console.log("fragment4[1]: "+this.fragment1[1]);
    this.idToken = this.fragment4[1];
    //console.log("idToken: "+this.idToken);

    //5
    this.fragment5 = this.fragments[4].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    console.log("fragment1[1]: " + this.fragment5[1]);
    this.state = this.fragment5[1];
    console.log("state: " + this.state);

    //6
    this.fragment6 = this.fragments[5].split("=");
    //console.log("fragment1[0]: "+this.fragment1[0]);
    console.log("fragment1[1]: " + this.fragment6[1]);
    this.nonce = this.fragment6[1];
    console.log("nonce: " + this.nonce);
    // this.storeData();
    // this.isStoreData();
    this.getProfile(this.access);
    this.presentLoading();
    this.items = [
      {
        'title': this.name,
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
    this.navCtrl.push(TableroPage, this.paramsParaSegPag);
  }

  storeData(): void {
    this.nativeStorage.setItem('data-ulm', {
      access_token: this.access,
      token_type: this.token,
      expires_in: this.expires,
      id_token: this.idToken,
      state: this.state,
      nonce: this.nonce,
    });
  };

  isStoreData() {
    this.nativeStorage.getItem('data-ulm')
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  };

  getProfile(access: string) {
    this.profileServiceProvider.getProfile(access).subscribe(data => {

      this.profiles = data['tel_assets'];

      for (this.count = 0; this.count < this.profiles.length; this.count++) {
       // console.log("this.profiles= " + this.profiles[this.count].split(" "));
        this.profiles2 = this.profiles[this.count].split(",");
        //console.log("profile2 0= " + this.profiles2[0].split(":"));
        //console.log("profile2 1= " + this.profiles2[1].split(":"));
        
        this.profiles3=this.profiles2[0].split(":");
        //console.log("profile3 0= " +this.profiles3[0]);
        //console.log("profile3 1= " +this.profiles3[1]);
  
        this.profiles4=this.profiles2[1].split(":");
        //console.log("profile4 0= " +this.profiles4[0]);
        //console.log("profile4 1= " +this.profiles4[1]);

        this.totalProf.push(this.profiles4[1]+"  cod ="+this.profiles3[1]);
        //console.log("this.totalProf = "+this.totalProf[this.count]);
      }
     

      //console.log("this.totalProf = "+this.totalProf[1]);

      this.name = data['tel_first_name'].toUpperCase();
      this.name2 = data['tel_second_name'].toUpperCase();
      this.apePaterno = data['tel_last_name'].toUpperCase();
      this.apeMaterno = data['tel_second_last_name'].toUpperCase();
      this.dni = data['tel_cust_id'];
      this.correo = data['tel_email_address'];
      this.login = data['credentialType'];
      this.sexo = data['tel_gender'];
      console.log("Nombre: " + this.name);

      this.paramsParaSegPag = {
        unTexto: "Hola",
        nombre: this.name,
        nombre2: this.name2,
        apePaterno: this.apePaterno,
        apeMaterno: this.apeMaterno,
        dni: this.dni,
        correo: this.correo,
        login: this.login,
        sexo: this.sexo,
        totalProf: this.totalProf
      };

      /* console.log("Nombre22: " + this.name);
       console.log("parametros: "+this.paramsParaSegPag['unTexto']);
       console.log("parametros: "+this.paramsParaSegPag['Nombre']);
         */
    }, err => {
      console.log(err);
    });


  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Please wait...',
      duration: 10000,
      dismissOnPageChange: true
    }).present();
  }

}
