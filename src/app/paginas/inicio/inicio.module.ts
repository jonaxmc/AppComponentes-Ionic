import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { RegistroPageModule } from '../registro/registro.module';
import { RegistroPage } from '../registro/registro.page';

@NgModule({
  entryComponents:[
    RegistroPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    RegistroPageModule
  ],
  declarations: [InicioPage]
})
export class InicioPageModule {}
