import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivityFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-activity-form',
  templateUrl: 'activity-form.html',
})
export class ActivityFormPage {
  estado:any
  objetivo:any
  titulo:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estado = this.navParams.data['estado']
    if (this.estado == 'nuevo') {
      this.titulo = 'Nuevo objetivo'
    } else {
      this.titulo = 'Modificar objetivo'
      this.objetivo = this.navParams.data['objetivo']
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivityFormPage');
  }

}
