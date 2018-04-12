import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ConfigurarServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configurar-service',
  templateUrl: 'configurar-service.html',
})
export class ConfigurarServicePage {
  myForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.myForm = this.createMyForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurarServicePage');
  }

  saveData(){
    console.log(this.myForm.value);
  };

  private createMyForm(){
    return this.formBuilder.group({
      param1: ['', Validators.required],
      param2: ['', Validators.required],
      param3: ['', Validators.required],
      /*telefono: ['', Validators.required],
     // dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],*/
    });
  }

}
