import { AjustesProvider } from './../providers/ajustes/ajustes';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { IntroduccionPage } from '../pages/introduccion/introduccion';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  // *.23 mostrar temporalmente la pagina introduccion
  //rootPage:any ="introPage";

  // *.35 dejar el roorPage sin definir (any)
  rootPage: any;


  constructor(private platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private ajustesProvider:AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      // *.36 cargar introduccion o home en función de lo que tenga en memoria movid/navegador
      // acordarse de inyectar AjustesProvider
      // this.ajustesProvider.cargar_storage();
      // if (this.ajustesProvider.listaAjustes.mostrar_tutorial){
      //   this.rootPage = "introPage";
      // } else {
      //   this.rootPage = HomePage;
      // }

      // *.38 hacemos lo mismbo pero suscribiendo con un then a cargar_sotorage()

      this.ajustesProvider.cargar_storage()
          .then( () => {
            if (this.ajustesProvider.listaAjustes.mostrar_tutorial){
                this.rootPage = "introPage";
              } else {
                this.rootPage = HomePage;
              }
          })
      
      statusBar.styleDefault();
      splashScreen.hide();

      // *.40 operaciones de pausa y resume
      this.platform.pause.subscribe(()=>{
        console.log ("la app se va a pausar")
      });
      this.platform.resume.subscribe(()=>{
        console.log ("la app se va a reanudar")
      });
    });
  }
}

