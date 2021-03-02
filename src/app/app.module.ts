import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuleComponent } from './aule/aule.component';
import { StudentiComponent } from './studenti/studenti.component';
import { CorsiComponent } from './corsi/corsi.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuleComponent,
    StudentiComponent,
    CorsiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
