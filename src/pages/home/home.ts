import { Component } from '@angular/core';
import { MymovistarPage } from '../mymovistar/mymovistar'
import { UsersProvider} from '../../providers/usuarios-service/usuarios-service';
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';

import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  model: User;

  constructor(
    private iab: InAppBrowser,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController, 
    private userProvider: UsersProvider,
    public plt: Platform
    ) {
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
  console.log(this.plt.url());
  var url = "https://168.128.13.18" 
  url += "/cas/oidc/authorize?response_type=id_token%20token&scope=openid%20profile_full&nonce=1whidqh";
  url += "&client_id=com.everis.ulm.poc";
  url += "&redirect_uri=https://everis-ulm-poc.herokuapp.com/page-mymovistar";
  url += "&state=1qgbeww";
  console.log(url);
  var target = "_blank";
  var options = "location=yes,hidden=no";
  //const browser =  this.iab.create(url,target,options);
 // browser.show();
 window.open(url);
}
}

export class User {
usuario: string;
password: string;
}