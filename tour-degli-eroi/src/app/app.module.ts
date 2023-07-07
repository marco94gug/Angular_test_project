import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EroiComponent } from './eroi/eroi.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { NotifyComponent } from './notify/notify.component';

@NgModule({
  declarations: [AppComponent, EroiComponent, HeroDetailsComponent, NotifyComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
