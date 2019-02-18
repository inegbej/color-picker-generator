import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { appRoutes } from './app.route';
import { ColorgeneratorComponent } from './colorgenerator/colorgenerator.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ColorgeneratorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
