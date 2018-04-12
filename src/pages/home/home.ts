import { Component } from '@angular/core';
import { MymovistarPage } from '../mymovistar/mymovistar'
import { UsersProvider} from '../../providers/usuarios-service/usuarios-service';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model: User;

  constructor(private iab: InAppBrowser,public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {
    this.model = new User();
    this.model.usuario = 'treyes';
    this.model.password = '12345';

    console.log(this.navParams);
  }

  login() {
  
    this.userProvider.login(this.model.usuario, this.model.password)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logueado con exito!!!  '+this.model.usuario, position: 'botton', duration: 3000 }).present();

      //Salvar o token no Ionic Storage para usar em futuras requisições.
      //Redirecionar o usuario para outra tela usando o navCtrl
      //this.navCtrl.pop();
      
      this.navCtrl.push(MymovistarPage);
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Error en efectuar login. Error: '+this.model.usuario + error.error, position: 'botton', duration: 3000 }).present();
    });
}
openLink(){
  const options: InAppBrowserOptions ={
    zoom: 'no'
  };
  const browser =  this.iab.create("https://168.128.13.18/cas/oidc/authorize?response_type=id_token%20token&scope=openid%20profile_full&nonce=1whidqh&client_id=com.everis.ulm.poc&redirect_uri=https://everis-ulm-poc.com/page-mymovistar&state=1qgbeww",'_self',options);
 // browser.show();
}
}

export class User {
usuario: string;
password: string;
}