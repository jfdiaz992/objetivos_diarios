import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the RecoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-recovery',
  templateUrl: 'recovery.html',
})
export class RecoveryPage {
  data:any[]=[]
  recoveryForm:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController
    , private fb: FormBuilder) {
    this.recoveryForm=this.fb.group({
    'email' : ['',[Validators.email, Validators.required]],
    })
  }

  recoveryPassword(){
    this.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecoveryPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
