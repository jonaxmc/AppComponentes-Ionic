import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { RegistroPage } from '../registro/registro.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icono:'alert-circle-outline',
      name: 'Página Alert',
      redirecTo: '/alert'
    },
    {
      icono: 'beer-outline',
      name: 'Página Action-Sheet',
      redirecTo:'/action-sheet'
    },
    {
      icono:'briefcase-outline',
      name:'Registro',
      redirecTo:'/registro'
    }
  ];
  constructor(private menu: MenuController, private modalController:ModalController) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  abrirMenu(){
    this.menu.toggle();
  }
  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalController.create({
      component: RegistroPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}

interface Componente{
  icono: string;
  name: string;
  redirecTo: string;
}
