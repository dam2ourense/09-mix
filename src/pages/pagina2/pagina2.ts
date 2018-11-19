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

  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  // *.10 crear métod que atiende al evento
  ir_pagina3(){
    // *.11 invocado el nombre que aparece en pagina3.molude.ts
    //this.navCtrl.push("Pagina3Page");

    // *.13 otra forma de referenciarla por el name de @IonicPage eb pagina3.ts
    this.navCtrl.push("mi-pagina3");
  

  }
}
