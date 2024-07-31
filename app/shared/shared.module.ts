import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import { CustomCheckboxComponent } from './components/custom-checkbox/custom-checkbox.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    ModalComponent,
    LogoComponent  
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    CustomSelectComponent,
    CustomCheckboxComponent,
    ModalComponent,
    LogoComponent,
    ReactiveFormsModule
  ],
  imports: [ 
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],

  providers: []
})
export class SharedModule { }
