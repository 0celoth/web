import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { HttpClientModule } from '@angular/common/http';

// =============================FIRE BASE====================================================================
// import { AngularFireModule, } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { environment } from 'src/environments/environment';

import { SupabaseService } from './services/supabase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule, 
    IonicStorageModule.forRoot(),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
