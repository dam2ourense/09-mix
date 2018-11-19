import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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

  ionViewCanEnter(){
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

  ionViewCanLeave(){
    console.log("ionViewCanLeave");
    // *.17 dejamos salir después de 2 segundos
    let promesa = new Promise((resolv,reject) =>{
      setTimeout(() => {resolv (true);        
      }, 2000);
    } );
    return promesa;

    //*.18 sintaxis alternativa return new promesa....

  }

}
