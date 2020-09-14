import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

import { FirstComponent } from './first.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
  ],
  declarations: [
    FirstComponent,
  ],
})
export class FirstModule {  
}
