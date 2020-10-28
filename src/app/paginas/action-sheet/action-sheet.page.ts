import { Component, OnInit, ViewChild } from '@angular/core';
import { ActionSheetController, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  datos = Array(100);
  @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;

  constructor(public actionSheetC: ActionSheetController) { }

  ngOnInit() {
  }

  loadDatos(event) {
    setTimeout(() => {
      if (this.datos.length > 25) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArr = Array(30);
      this.datos.push(...nuevoArr);
      event.target.complete();
    }, 1000);


  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetC.create({
      header: 'Opciones de Usuario',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        cssClass: 'texto_rojo',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Iniciar Tarea',
        icon: 'play-outline',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favoritos',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
