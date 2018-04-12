import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersProvider} from '../../providers/usuarios-service/usuarios-service';
import { DetGruposPage } from '../det-grupos/det-grupos';

@IonicPage()
@Component({
  selector: 'page-add-contacto',
  templateUrl: 'add-contacto.html',
})
export class AddContactoPage {
  myForm: FormGroup;
  model: Contacto;
  responseData : any;
  userData = {"idGrupo":"5","nombre": "","apellidos": "", "email": "","telefono": ""};
  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController,public formBuilder: FormBuilder, private userProvider: UsersProvider) {
    this.myForm = this.createMyForm();
    this.model = new Contacto();
    this.model.nombre = 'Tomas';
    this.model.apellidos='Reyes'
    this.model.email = 'Treyes@fife';
    this.model.telefono = '123546';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddContactoPage');
  }

  saveData(){
    console.log(JSON.stringify(this.userData));
    this.userProvider.addContacto(this.userData,'contactos/agregar').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      if(this.responseData.userData){
      //console.log(this.responseData);
      console.log("usuario agregado");
      //localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(DetGruposPage);
      }
      else{ console.log("User existe"); }
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Error al crear un usuario. Error: ' + error.error, position: 'botton', duration: 3000 }).present();
    });

  };

  private createMyForm(){
    return this.formBuilder.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
     // dateBirth: ['', Validators.required],
     /* passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],*/
    });
  }
}
export class Contacto {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string
}