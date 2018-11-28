import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  // *.42 import e inject AlertController
  // *.44 import e inject LoadingController
  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private alertCtrl: AlertController,
            private loadingCtrl: LoadingController) {
  }



  // *.10 crear métod que atiende al evento
  ir_pagina3(){
    // *.11 invocado el nombre que aparece en pagina3.molude.ts
    //this.navCtrl.push("Pagina3Page");

    // *.13 otra forma de referenciarla por el name de @IonicPage eb pagina3.ts
    this.navCtrl.push("mi-pagina3");

  }

  //*.15 ver en consola la ejecución del ciclo de vida de una página

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter_antiguo(){
    console.log("ionViewCanEnter");

    // *.16 entrar de forma aleatoria
    let numero = Math.round(Math.random() *10);
    console.log (numero);
    if (numero >=3){
      return true;
    } else {
      return false;
    }
  }

  // *.41 renombrar el ionViewCanEnter anterior a  ionViewCanEnter_antiguo()

  ionViewCanEnter(){
    console.log("ionViewCanEnter");

    let promesa = new Promise ( (resolve, reject)=>{
      // *.43 copiar el esquema de la DOCU https://ionicframework.com/docs/components/#alert-confirm
      let confirmar = this.alertCtrl.create({
        title: 'Seguro?',
        message: 'Quieres entrar?',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => { resolve (false) }
          },
          {
            text: 'Aceptar',
            handler: () => { resolve (true) }
          }
        ]
      });
      confirmar.present();
    }
    );
    return promesa;    
  }

  ionViewCanLeave_antiguo(){
    console.log("ionViewCanLeave");
    // *.17 dejamos salir después de 2 segundos
    let promesa = new Promise((resolv,reject) =>{
      setTimeout(() => {resolv (true);        
      }, 2000);
    } );
    return promesa;

    //*.18 sintaxis alternativa return new promesa....

  }

  // *.44 renombrar el ionViewCanLeave por ionViewCanLeave_antiguo y trabajamos en este
  ionViewCanLeave(){
    console.log("ionViewCanLeave");

    let loading = this.loadingCtrl.create({
      content: "Espere por favor..."
    })
    loading.present();

    let promesa = new Promise((resolv,reject) =>{
      setTimeout(() => {
        resolv (true);
        loading.dismiss();        
      }, 5000);
    } );
    return promesa;
  }
}
