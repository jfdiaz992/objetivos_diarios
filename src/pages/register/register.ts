import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  data:any[]=[]
  registerForm:FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      'name' : ['',[Validators.required]],
      'job' : ['',[Validators.required]],
      'characteristic' : ['',[Validators.required]],
      'email': ['',[Validators.email, Validators.required]],
      'password' : ['',[Validators.required]],
      'passwordConfirm' : ['',[Validators.required]],
    })
    //FormGroup for password validate
  }
  registerUser(){
    console.log(this.data)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
