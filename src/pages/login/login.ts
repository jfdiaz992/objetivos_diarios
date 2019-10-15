import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPage } from '../register/register';
import {ModalController} from 'ionic-angular';
import { RecoveryPage } from '../recovery/recovery';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  data:any[]=[]
  loginForm:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private modalCtrl: ModalController) {
  this.loginForm = this.fb.group({
    'email' : ['',[Validators.email, Validators.required]],
    'password' : ['',[Validators.required]]
  })
  }

  recoveryPassword(){
    const modal = this.modalCtrl.create(RecoveryPage);
    modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  authenticateUser(){
    console.log(this.data)
    this.navCtrl.setRoot(HomePage)
  }

  registerUser(){
    this.navCtrl.push(RegisterPage)
  }
}
