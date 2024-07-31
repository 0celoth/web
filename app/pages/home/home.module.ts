import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { CustomSlaiderComponent } from "../../shared/components/custom-slaider/custom-slaider.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    CustomSlaiderComponent
],
  declarations: [HomePage]
})
export class HomePageModule {}
