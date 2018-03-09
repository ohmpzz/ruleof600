import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalcPage } from './calc';
import { PipesModule } from './../../pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CalcPage,
  ],
  imports: [
    IonicPageModule.forChild(CalcPage),
    PipesModule,
    ReactiveFormsModule
  ],
})
export class CalcPageModule {}
