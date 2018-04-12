import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MymovistarPage } from './mymovistar';

@NgModule({
  declarations: [
    MymovistarPage,
  ],
  imports: [
    IonicPageModule.forChild(MymovistarPage),
  ],
})
export class MymovistarPageModule {}
