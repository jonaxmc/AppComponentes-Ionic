import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nombre: String;
  cedula: String;
  datos_estudios = [
    {
      name:'Ciencias de la computacion',
      selected:true,
      color: 'primary'
    },
    {
      name:'Civil',
      selected:false,
      color: 'secondary'
    },
    {
      name:'Electronica',
      selected:false,
      color:'tertiary'
    },
    {
      name:'Mecatronica',
      selected:false,
      color:'medium'
    }

  ];

  constructor(public alertControl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertControl.create({
      header: 'Alerta',
      subHeader: 'Mensaje de Informacion',
      message: 'Este es un msj de prueba',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertControl.create({
      header: 'Ingrese sus datos',
      inputs: [
        {
          name: 'txtNombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
        {
          name: 'txtCedula',
          type: 'text',
          placeholder: 'Ingrese su cedula'
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.nombre = data.txtNombre;
            this.cedula = data.txtCedula;

          }
        }
      ]
    });

    await alert.present();
  }

  onCarrera(check){
    if(check.selected == true){
      console.log(check)
    }
    
  }


}
