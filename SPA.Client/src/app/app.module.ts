import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path  
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    ContactusComponent
  ],
  imports: [
      BrowserModule,      
      RouterModule.forRoot(MAINMENU_ROUTES, { enableTracing: true }),
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
