import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PompesElectriqueComponent } from './pompes-electrique/pompes-electrique.component';



@NgModule({
  declarations: [
    PompesElectriqueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PompesElectriqueComponent
  ]
})
export class EquipementModule { }
