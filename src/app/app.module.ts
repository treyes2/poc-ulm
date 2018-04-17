import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MymovistarPage } from '../pages/mymovistar/mymovistar';
import { TableroPage } from '../pages/tablero/tablero';
import { ServiciosPage } from '../pages/servicios/servicios';
import { GruposPage } from '../pages/grupos/grupos';
import { AddGruposPage } from '../pages/add-grupos/add-grupos';
import { DetGruposPage } from '../pages/det-grupos/det-grupos';
import { AddContactoPage } from '../pages/add-contacto/add-contacto';
import { CompartirServicePage } from '../pages/compartir-service/compartir-service';
import { ConfigurarServicePage } from '../pages/configurar-service/configurar-service';
import { UsersProvider } from '../providers/usuarios-service/usuarios-service';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Deeplinks } from '@ionic-native/deeplinks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
   MymovistarPage,
    TableroPage,
    ServiciosPage,
    GruposPage,
    AddGruposPage,
    DetGruposPage,
    AddContactoPage,
    CompartirServicePage,
    ConfigurarServicePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MymovistarPage,
    TableroPage,
    ServiciosPage,
    GruposPage,
    AddGruposPage,
    DetGruposPage,
    AddContactoPage,
    CompartirServicePage,
    ConfigurarServicePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,InAppBrowser,Deeplinks
  ]
})
export class AppModule {}
