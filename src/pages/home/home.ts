import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import { ActivityFormPage } from '../activity-form/activity-form';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {

  objetiveList:any[]=[]
  constructor(public navCtrl: NavController) {

  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    alert('ngOnInit');
  }

  ionViewWillEnter() {
    alert('ionViewWillEnter');
    this.objetiveList = [
      {
        id: 1,
        usuario_id: 1,
        fecha_registro: '2019-10-17',
        descripcion: 'hola',
        estado: false
      },
      {
        id: 2,
        usuario_id: 2,
        fecha_registro: '2019-10-18',
        descripcion: 'hola 2',
        estado: true
      }
    ]
  }

  ionViewDidEnter() {
    alert('ionViewDidEnter');
  }

  ionViewWillLeave() {
    alert('ionViewWillLeave');
  }

  ionViewDidLeave() {
    alert('ionViewDidLeave');
  }

  ngOnDestroy() {
    alert('ngOnDestroy');
  }

  GoToLogin(){
    this.navCtrl.push(LoginPage)
  }

  registerUser(){
    this.navCtrl.push(RegisterPage)
  }

  add() {
    this.navCtrl.push(ActivityFormPage, { estado: 'nuevo' })
  }

  edit(objetivo:any, indice:any) {
    this.navCtrl.push(ActivityFormPage, { estado: 'editar', objetivo: objetivo, indice: indice })
  }

}
