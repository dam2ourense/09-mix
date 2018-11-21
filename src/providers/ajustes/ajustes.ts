import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class AjustesProvider {
  // *.31 creamos una propiedad....
  listaAjustes = {
    mostrar_tutorial: true
  }


  // *.30 inyectamos Storage y Platform vemos que se introducen los import
  constructor(private plataforma: Platform,
              private storage:Storage) {
    
  }
  // *.29 crear el almacenamiento
  cargar_storage(){
    // if (this.plataforma.is("cordova")){ //estamos en el móvil

    // } else { //estamos en el navegador
    //   //localStorage viene en html5 y soportado por navegadores modernos
    //   if( localStorage.getItem("ajustes")){
    //     this.listaAjustes = JSON.parse(localStorage.getItem("ajustes")); //pasamos string a JSON
    //   }
    // }    

    // *.37 reformular todo como una promesa
    let promesa = new Promise ((resolv, reject) =>{
      if (this.plataforma.is("cordova")){ //estamos en el móvil
        this.storage.ready()
          .then( () =>{
            this.storage.get("ajustes")
              .then (a =>{
                if (a){
                this.listaAjustes = a;
                }
                resolv();
              }
              )
          }
          )
        } else { //estamos en el navegador
          //localStorage viene en html5 y soportado por navegadores modernos
          if( localStorage.getItem("ajustes")){
            this.listaAjustes = JSON.parse(localStorage.getItem("ajustes")); //pasamos string a JSON
          }
          resolv();
      }
    });
    return promesa;
  }

  // *.32 creamos el método que guarda un valor en el móvil/navegador
  guardar_storage(){
    if (this.plataforma.is("cordova")){ 
      // *.39 si estamos en el movil
      this.storage.ready()
        .then(()=>{ this.storage.set("ajustes",this.listaAjustes)}

        )
    } else {
      localStorage.setItem("ajustes", JSON.stringify(this.listaAjustes) );  //aplanamos el JSON
    }
  }

}
