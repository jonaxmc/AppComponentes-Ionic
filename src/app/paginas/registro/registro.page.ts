import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nombre:string;

  usuario={
    email:'',
    pass:'',
    repass:''

  }
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();
  }

  onSubmitTemplate(){
    console.log('registro');
  }
  enviar(){
    
  }

}
